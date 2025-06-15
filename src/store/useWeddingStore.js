import { create } from 'zustand';

export const useWeddingStore = create((set) => ({
  // 👨‍👩‍👧 가족 정보
  familyInfo: {
    gf: "홍길동",
    gm: "김영희",
    g: "길동동",
    bf: "이철수",
    bm: "박민정",
    b: "이민정",
    s: "아들",
    d: "딸",
  },
  setFamilyInfo: (key, value) =>
    set((state) => ({
      familyInfo: {
        ...state.familyInfo,
        [key]: value,
      },
    })),

  // 🖼 대표 이미지
  mainPhoto: null,
  setMainPhoto: (photo) => set({ mainPhoto: photo }),
  mainPhotoUrl: 'https://www.itscard.co.kr/mobile/new_m/mcard/images/mcard_31/visual_01.jpg',
  setMainPhotoUrl: (url) => set({ mainPhotoUrl: url }),

  // 💬 인삿말
  greetingMessage: `두 사람이 사랑으로 만나
진실과 이해로써 하나를 이루려 합니다.

이 두 사람을 지성으로 아끼고 돌봐주신
여러 어른과 지인분들을 모시고
서약을 맺고자 하오니,

바쁘신 가운데 참석 해주셔서
축복해주시면 감사하겠습니다.`,
  setGreetingMessage: (msg) => set({ greetingMessage: msg }),

  // 📆 날짜 & 시간
  weddingDate: '',
  weddingTime: '',
  setWeddingTime: (timeStr) => set({ weddingTime: timeStr }),
  setWeddingDate: (dateStr) => set({ weddingDate: dateStr }),

  // 🅰️ 미리보기용 폰트
  previewFont: "'SCoreDream', sans-serif",
  setPreviewFont: (font) => set({ previewFont: font }),

  // ✨ 레터링 설정
  letteringText: '',
  setLetteringText: (text) => set({ letteringText: text }),

  letteringColor: '#000000',
  setLetteringColor: (color) => set({ letteringColor: color }),

  letteringPosition: { x: 50, y: 10 }, // 퍼센트 기준 (중앙: 50%)
  setLetteringPosition: (pos) => set({ letteringPosition: pos }),

  letteringFont: "'Pretendard Variable', sans-serif",
  setLetteringFont: (font) => set({ letteringFont: font }),
}));
