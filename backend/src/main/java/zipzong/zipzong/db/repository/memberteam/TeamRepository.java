package zipzong.zipzong.db.repository.memberteam;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import zipzong.zipzong.db.domain.Team;

import java.util.List;
import java.util.Optional;

public interface TeamRepository extends JpaRepository<Team, Long> {
    Optional<Team> findByInviteLink(String inviteLink);

    @Query("select t from Team t where t.isDeleted is null")
    List<Team> getAllTeamNoDeleted();
}
