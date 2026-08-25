/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김은찬",
    father: "김상흔",
    mother: "이현경",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "조소연",
    father: "조영일",
    mother: "김옥현",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-12",
    time: "14:30",
    venue: "아르베 웨딩홀",
    hall: "라피네홀",
    address: "서울특별시 강남구 봉은사로 302 (서울 강남구 역삼동 680)",
    tel: "02-564-7031",
    mapLinks: {
      kakao: "https://place.map.kakao.com/191889847",
      naver: "https://naver.me/GOPeOix0"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "함께하는 6번째 겨울,\n부부로서 새로운 시작을 맞이하게 되었습니다.\n\n앞으로 함께 나아갈 수많은 계절\n그 시작의 자리에 함께해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "평생 좋은 친구로, 사랑하는 연인으로\n서로 아껴주고 사랑하며 살겠습니다.\n\n소중한 걸음으로 함께해주시면 감사하겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김은찬", bank: "우리은행", number: "1002-961-737829" },
      { role: "아버지", name: "김상흔", bank: "기업은행", number: "003-500175-01-010" },
      { role: "어머니", name: "이현경", bank: "국민은행", number: "803901-01-573064" }
    ],
    bride: [
      { role: "신부", name: "조소연", bank: "우리은행", number: "1002-049-813278" },
      { role: "아버지", name: "조영일", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "김옥현", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김은찬 ♥ 조소연 결혼합니다",
    description: "2026년 12월 12일, 소중한 분들을 초대합니다."
  }
};
