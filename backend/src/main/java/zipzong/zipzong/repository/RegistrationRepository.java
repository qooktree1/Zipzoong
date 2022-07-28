package zipzong.zipzong.repository;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import zipzong.zipzong.domain.Registration;
import zipzong.zipzong.domain.Team;

import java.util.List;
import java.util.Optional;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {

    //@Query(value = "select t from Registration r join fetch Team t join fetch Member m where m.id = :memberId")

    //@Query("select r from Registration r join fetch r.team t join fetch r.member m where r.member.id =:memberId")
    //List<Registration> findJoinedTeam(@Param("memberId") Long memberId);

    @EntityGraph(attributePaths = {"team"})
    @Query("select r from Registration r where r.member.id =:memberId")
    List<Registration> findJoinedTeam(@Param("memberId") Long memberId);

    @EntityGraph(attributePaths = {"team", "member"})
    @Query("select r from Registration r where r.team.id =:teamId")
    List<Registration> findTeamDetail(@Param("teamId") Long teamId);
    Optional<Registration> findByMemberIdAndTeamId(Long memberId, Long teamId);

    List<Registration> findAllByTeamId(Long teamId);
}
