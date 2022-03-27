import { Route, Routes } from "react-router-dom";
import Index from "./Index";
import StuedyContents from "./StudyContents";
import Study from "./Study";
import StudyContent from "./StudyContent";

const koreanContents = [
  { title: "시를 읽고 생각이나 느낌 나누기", youtube: ["3CYNKN3kMhY"] },
  { title: "내용 간추리기", youtube: ["jq9mYwUXA7w"] },
  { title: "적절한 표정, 몸짓, 말투", youtube: ["Ob7ad6uMmpw"] },
  { title: "사실과 의견", youtube: ["q5tLXlFNots"] },
  { title: "이야기의 흐름", youtube: ["1niDu9NywxE"] },
  { title: "학급회의", youtube: ["_O7dpiBLei0"] },
  { title: "국어사전 찾는 방법", youtube: ["D68I12PWNU8"] },
  { title: "낱말 사이의 의미 관계", youtube: ["lj2xsglwnZU"] },
  { title: "제안하는 글", youtube: ["3N9utRNyzu0", "3s7jrd8XlOw"] },
  { title: "한글의 우수성과 중요성", youtube: ["7g5TPieRY3o"] },
  { title: "만화 속 표현장치의 효과 알기", youtube: ["eG_oNCIRwo4"] },
  { title: "이어질 장면 생각하기", youtube: ["DqdBhmDORJQ"] },
  { title: "마음을 전하는 글쓰기", youtube: ["AhjVQzbNlN4"] },
  { title: "대화 예절", youtube: ["3fkPfFf0oTk"] },
  {
    title: "이야기의 인물, 사건, 배경",
    youtube: ["cBZ61FT0kPA", "jyZ2jMBaBlY"],
  },
  { title: "문장의 짜임", youtube: ["KbhTGX5aTsU"] },
  { title: "의견을 제시하는 글쓰기", youtube: ["62WiLdQjn14", "yAlz9WjINYI"] },
  {
    title: "전기문의 특성",
    youtube: ["Xz8ZVfDzTR0", "c8qtlzxtdXs", "3X9Iza9ePsk"],
  },
  { title: "독서 감상문", youtube: ["7B50OwZULhE"] },
  { title: "의견의 적절성 판단하기", youtube: ["e6NDdJogtF0"] },
  { title: "시나 이야기를 읽고 표현하기", youtube: ["SGKdQK8JTF4"] },
];
const mathContents = [
  { title: "큰 수", youtube: ["RHzD2bfPiqE", "hlN_0OdNgXM"] },
  { title: "뛰어 세기와 큰 수의 크기 비교", youtube: ["PPuPJ92mWIs"] },
  { title: "각의 크기", youtube: ["DL7jdGJg6PU", "UCCJlmfcOsI"] },
  { title: "각 그리기", youtube: ["QQpXj87-AkM"] },
  { title: "예각과 둔각", youtube: ["mTYhWd34m1c"] },
  { title: "각도의 합과 차", youtube: ["rRAEJWh9CIs"] },
  { title: "삼각형 세 각의 크기의 합", youtube: ["GsBKjIYV4q4"] },
  { title: "사각형 네 각의 크기의 합", youtube: ["Zl6VXYk-0Pc"] },
  { title: "(세 자리 수)×(몇십)", youtube: ["m2TgKMo2_D4"] },
  { title: "(세 자리 수)×(두 자리 수)", youtube: ["dxPCot-9aqY"] },
  { title: "(세 자리 수) ÷ (몇십)", youtube: ["9g5Zg3wOJgI"] },
  {
    title: "(세 자리 수)÷(두 자리 수)",
    youtube: ["iMXXkPUoK94", "7FOhlSg-rvg"],
  },
  { title: "평면도형 밀기", youtube: ["mdk1t9qeV4Q"] },
  { title: "평면도형 뒤집기", youtube: ["V3PfKfDQPZQ"] },
  { title: "평면도형 돌리기", youtube: ["pFH8wQbuj6s"] },
  { title: "무늬 꾸미기", youtube: ["UAREcLbYlME"] },
  { title: "막대그래프", youtube: ["URZSEJvqnsM"] },
  { title: "수의 배열에서 규칙 찾기", youtube: ["_W2pMHzeps0"] },
  { title: "도형의 배열에서 규칙 찾기", youtube: ["4RFjSQ3JdYw"] },
  { title: "규칙적인 계산식 찾기", youtube: ["lSlXUP-THT4"] },
  { title: "분수의 덧셈", youtube: ["VoHDBRDIlfA"] },
  { title: "분수의 뺄셈", youtube: ["vRg6Voyt9t8"] },
  { title: "대분수의 덧셈", youtube: ["wkLZDrvZ9pM"] },
  { title: "대분수의 뺄셈", youtube: ["PC964BugWAc"] },
  { title: "이등변삼각형", youtube: ["lh9hgo72D5k"] },
  { title: "정삼각형", youtube: ["WrE6RY_KnqQ", "-cIBV5Oukm8"] },
  { title: "예각삼각형과 둔각삼각형", youtube: ["UJpdOh4w8Eo"] },
  { title: "소수 두 자리 수와 세 자리 수", youtube: ["UlQHKHd6Wuk"] },
  { title: "소수의 크기 비교", youtube: ["rgN7vvLfJ50"] },
  { title: "소수 사이의 관계", youtube: ["OwTOSP4pQVE"] },
  { title: "소수의 덧셈", youtube: ["uU_v8fbqaMQ"] },
  { title: "소수의 뺄셈", youtube: ["Hxv6SlRwYwI"] },
  { title: "수직과 수선", youtube: ["c64cmrMUzDQ"] },
  { title: "평행", youtube: ["aLGRzFfNYJY"] },
  { title: "사다리꼴", youtube: ["lYzrRiJ1KwU"] },
  { title: "평행사변형", youtube: ["PWW2BpD6DFo"] },
  { title: "마름모와 여러 가지 사각형", youtube: ["ICXvVK13sxw"] },
  { title: "꺾은선그래프", youtube: ["sLw_KrK6zwc"] },
  { title: "다각형과 정다각형", youtube: ["GYetAk_vyzA"] },
  { title: "대각선", youtube: ["-4oAGrg_JDk"] },
  { title: "모양 만들기", youtube: ["DZV5O8jgf68"] },
  { title: "모양 채우기", youtube: ["ulebkDrmB6g"] },
];

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/study" element={<Study />} />
      <Route
        path="/study/korean"
        element={<StuedyContents subject="국어" contents={koreanContents} />}
      />
      {koreanContents.map(({ title, youtube }, index) => (
        <Route
          key={youtube}
          path={"/study/korean/" + (index + 1).toString().padStart(2, "0")}
          element={
            <StudyContent
              backPage="/study/korean"
              title={title}
              youtube={youtube}
            />
          }
        />
      ))}
      <Route
        path="/study/math"
        element={<StuedyContents subject="수학" contents={mathContents} />}
      />
      {mathContents.map(({ title, youtube }, index) => (
        <Route
          key={youtube}
          path={"/study/math/" + (index + 1).toString().padStart(2, "0")}
          element={
            <StudyContent
              backPage="/study/math"
              title={title}
              youtube={youtube}
            />
          }
        />
      ))}
      <Route path="/question" element={<h1>질문방</h1>} />
      <Route path="/zoom" element={<h1>화상수업</h1>} />
      <Route path="/*" element={<h1>없는 페이지</h1>} />
    </Routes>
  );
}
