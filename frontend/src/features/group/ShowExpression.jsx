export default function ShowExpression({ imageUrl }) {
  const groupIcons = [
    { basic: "기본 아이콘" },
    { bee: "기본 아이콘" },
    { elephant: "기본 아이콘" },
    { ferret: "기본 아이콘" },
    { frog: "기본 아이콘" },
    { pandaBear: "기본 아이콘" },
    { pig: "기본 아이콘" },
    { rabbit: "기본 아이콘" },
    { walrus: "기본 아이콘" },
    { yak: "기본 아이콘" },
    { groupMaxStreak3Days: "그룹 연속 3일 출석 달성" },
    { groupMaxStreak7Days: "그룹 연속 7일 출석 달성" },
    { groupMaxStreak21Days: "그룹 연속 21일 출석 달성" },
    { groupMaxStreak66Days: "그룹 연속 66일 출석 달성" },
    { groupMaxExerciseTime10: "그룹에서 총 운동시간 10시간 달성" },
    { groupMaxExerciseTime100: "그룹에서 총 운동시간 100시간 달성" },
    { groupMaxExerciseTime1000: "그룹에서 총 운동시간 1000시간 달성" },
    { groupMaxExerciseTime10000: "그룹에서 총 운동시간 10000시간 달성" },
  ]
  return (
    <div>
      {groupIcons.map((key, index) => {
        if (imageUrl === Object.keys(key)[0]) {
          return <span key={index}>{Object.values(key)[0]}</span>
        }
      })}
    </div>
  )
}