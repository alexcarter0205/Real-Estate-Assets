// current year
export const currentYear = new Date().getFullYear();

// max item 1 page
export const LIMIT_PER_PAGE = 12;
// max news 1 page
export const LIMIT_NEWS = 8;

// min & max files can be uploaded
const BASE_MEDIA_UPLOAD = 4;
const LIMIT_IMG_UPLOAD = 8;
const LIMIT_VID_UPLOAD = 2;
const MAX_SIZE_UPLOAD = 5242880;
const MAX_SIZE_AVATAR = 3145728;
const ratio = 2 / 1;
export {
  BASE_MEDIA_UPLOAD,
  LIMIT_IMG_UPLOAD,
  LIMIT_VID_UPLOAD,
  MAX_SIZE_UPLOAD,
  MAX_SIZE_AVATAR,
  ratio,
};

// level access
const USER_LEVEL = 1;
const EDITOR_LEVEL = 2;
const ADMIN_LEVEL = 3;

export { USER_LEVEL, EDITOR_LEVEL, ADMIN_LEVEL };

// social media links
const fb = "";
const ins = "";
const x = "";
const git = "#";
export { fb, ins, x, git };

// purType page title
const purTypeTrue = `Mua Bán Nhà Đất Việt Nam Giá Rẻ, Mới Nhất ${currentYear}`;
const purTypeFalse = `Cho Thuê Nhà Đất Toàn Việt Nam Giá Rẻ, Chính Chủ ${currentYear}`;

export { purTypeTrue, purTypeFalse };

// number & helper
const billion = 1000000000;
const million = 1000000;
const m2 = "m²";

export { billion, million, m2 };

// title & des length
const minLength = 40;
const maxLength = 130;
const minDesLength = 150;
const maxDesLength = 3000;
export { minLength, maxLength, minDesLength, maxDesLength };

// news
const minTitle = 30;
const maxTitle = 150;
const minSummary = 150;
const maxSummary = 250;
const minContent = 300;
const maxContent = 7000;
export { minTitle, maxTitle, minSummary, maxSummary, minContent, maxContent };

// table captions
export const reCaptions = [
  "Người đăng",
  "Dạng bán",
  "Loại hình",
  "Tiêu đề",
  "Địa chỉ",
  "Báo xấu",
  "Trạng thái",
  "Ngày đăng",
  "Ngày hết hạn",
];

// hardcode re status
const DEFAULT_RE_STATUS = 1;
const SELLING_STATUS = 2;
const SOLD_STATUS = 3;
export { DEFAULT_RE_STATUS, SELLING_STATUS, SOLD_STATUS };

const local = `http://localhost:3000`;
const landhub = `https://www.landhub.netlify.app`;
export { local, landhub };
export const questURL = `https://www.mapquestapi.com/geocoding/v1/address?key=${
  import.meta.env.VITE_QUEST_KEY
}`;

export const newsCaptions = [
  "Người đăng",
  "Trạng thái",
  "Tiêu đề",
  "Tóm tắt",
  "Ngày đăng",
];

export const profileCaptions = [
  "Tên người dùng",
  "Email",
  "Phân quyền",
  "Địa chỉ",
  "Giới tính",
  "Ngày sinh",
  "Ngày tạo",
];

export const reportCaptions = [
  "Thông tin",
  "Sai địa chỉ",
  "Không liên lạc được",
  "Trùng lặp",
  "Không tồn tại",
  "Thông tin sai",
  "Ảnh có vấn đề",
  "Đã bán",
  "Báo cáo khác",
  "Ghi chú",
  "Người dùng",
  "Ngày báo cáo",
];

export const maxAreaSearch = 500;

// auth
const minName = 8;
const maxName = 30;

export { minName, maxName };

// expriry range
export const EXPRIRY_LENGTH = 14;
export const phoneLength = 10;
