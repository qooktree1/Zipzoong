import { useNavigate, useParams } from "react-router"
import RoutineList from "../features/routine/RoutineList"

export default function Routine() {
  const navigate = useNavigate()
  const { teamId } = useParams()

  return (
    <div className="">
      <div className="">
        <div className="flex pt-10 text-primary-700 justify-center font-extrabold text-3xl">
          ๊ทธ๋ฃน ๋ฃจํด
        </div>
        <div className="flex pt-2 pb-5 text-lgBlue-600 justify-center font-bold text-md">
          ๐ ๋ฃจํด์ ์ต๋ ๋ค์ฏ ๊ฐ ๊น์ง ์์ฑ ๊ฐ๋ฅํฉ๋๋ค.
        </div>
        <div className="flex pt-2 text-lgBlue-600 justify-center font-bold text-md">
          <button
            onClick={() => {
              navigate(`/group/${teamId}`)
            }}
            className="bg-lgBlue-200 border border-white w-[250px]   font-bold text-xl rounded-2xl p-3 shadow-lg"
          >
            ๊ทธ๋ฃน ํ์ด์ง๋ก ๋์๊ฐ๊ธฐ
          </button>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <RoutineList />
      </div>
      <div className="flex"></div>
    </div>
  )
}
