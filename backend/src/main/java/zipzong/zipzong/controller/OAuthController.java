package zipzong.zipzong.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zipzong.zipzong.config.jwt.Jwt;
import zipzong.zipzong.config.jwt.JwtService;
import zipzong.zipzong.domain.Member;
import zipzong.zipzong.repository.MemberRepository;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/oauth")
@RequiredArgsConstructor
public class OAuthController {

    private final JwtService jwtService;
    private final ObjectMapper objectMapper;
    private final MemberRepository memberRepository;

    @GetMapping("/loginInfo")
    public String oauthLoginInfo(Authentication authentication) {
        //oAuth2User.toString() 예시 : Name: [2346930276], Granted Authorities: [[USER]], User Attributes: [{id=2346930276, provider=kakao, name=김준우, email=bababoll@naver.com}]
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        //attributes.toString() 예시 : {id=2346930276, provider=kakao, name=김준우, email=bababoll@naver.com}
        Map<String, Object> attributes = oAuth2User.getAttributes();

        return attributes.toString();
    }

    @GetMapping("/token")
    public ResponseEntity createToken(Authentication authentication) {
        HttpHeaders responseHeader = new HttpHeaders();
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        Map<String, Object> attributes = oAuth2User.getAttributes();

        Member authMember = Member.builder()
                .email((String) attributes.get("email"))
                .provider((String) attributes.get("provider"))
                .name((String) attributes.get("name"))
                .build();

        Jwt token = jwtService.generateToken(authMember.getEmail(), authMember.getProvider(), authMember.getName());
        Member member = memberRepository.findByEmailAndProvider(authMember.getEmail(), authMember.getProvider())
                .orElseThrow(() -> new NoSuchElementException("Member Not Found"));
        member.setRefreshToken(token.getRefreshToken());
        memberRepository.save(member);

        DateFormat expirationFormat = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss");
        Date accessTokenExpirationDate = jwtService.getExpiration(token.getToken());
        String accessTokenExpiration = expirationFormat.format(accessTokenExpirationDate);
        Date refreshTokenExpirationDate = jwtService.getExpiration(token.getRefreshToken());
        String refreshTokenExpiration = expirationFormat.format(refreshTokenExpirationDate);

        responseHeader.add("accessToken", token.getToken()); //Header에 accessToken 추가
        responseHeader.add("refreshToken", token.getRefreshToken()); //Header에 refreshToken 추가
        responseHeader.add("accessTokenExpiration", accessTokenExpiration);
        responseHeader.add("refreshTokenExpiration", refreshTokenExpiration);
        return new ResponseEntity(responseHeader, HttpStatus.OK);
    }
}
