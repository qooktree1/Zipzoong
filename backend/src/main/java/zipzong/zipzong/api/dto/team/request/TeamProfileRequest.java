package zipzong.zipzong.api.dto.team.request;

import lombok.Data;

@Data
public class TeamProfileRequest {
    Long teamId;
    String name;
    String content;
}
