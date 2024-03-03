const itemsPerPage = 10;

const countryList = [
  { code: "AD", krName: "안도라", enName: "ANDORRA" },
  { code: "AE", krName: "아랍에미리트", enName: "UNITED ARAB EMIRATES" },
  { code: "AF", krName: "아프가니스탄", enName: "AFGHANISTAN" },
  {
    code: "AG",
    krName: "안티구아 바부다",
    enName: "ANTIGUA AND BARBUDA",
  },
  { code: "AI", krName: "앙길라", enName: "ANGUILLA" },
  { code: "AL", krName: "알바니아", enName: "ALBANIA" },
  { code: "AM", krName: "아르메니아", enName: "ARMENIA" },
  {
    code: "AN",
    krName: "네덜란드령 안틸레스",
    enName: "NETHERLANDS ANTILLES",
  },
  { code: "AO", krName: "앙골라", enName: "ANGOLA" },
  { code: "AQ", krName: "안타티카", enName: "ANTARCTICA" },
  { code: "AR", krName: "아르헨티나", enName: "ARGENTINA" },
  { code: "AS", krName: "아메리칸 사모아", enName: "AMERICAN SAMOA" },
  { code: "AT", krName: "오스트리아", enName: "AUSTRIA" },
  { code: "AU", krName: "호주", enName: "AUSTRALIA" },
  { code: "AW", krName: "아루바", enName: "ARUBA" },
  { code: "AX", krName: "알랜드 군도", enName: "ALAND ISLANDS" },
  { code: "AZ", krName: "아제르바이잔", enName: "AZERBAIJAN" },
  {
    code: "BA",
    krName: "보스니아 헤르체고비나",
    enName: "BOSNIA HERCEGOVINA",
  },
  { code: "BB", krName: "바베이도스", enName: "BARBADOS" },
  { code: "BD", krName: "방글라데시", enName: "BANGLADESH" },
  { code: "BE", krName: "벨기에", enName: "BELGIUM" },
  { code: "BF", krName: "부르키나파소", enName: "BURKINA FASO" },
  { code: "BG", krName: "불가리아", enName: "BULGARIA" },
  { code: "BH", krName: "바레인", enName: "BAHRAIN" },
  { code: "BI", krName: "브룬디", enName: "BURUNDI" },
  { code: "BJ", krName: "베냉", enName: "BENIN" },
  { code: "BL", krName: "세인트 바르탤르미", enName: "SAINT BARTHELEMY" },
  { code: "BM", krName: "버뮤다", enName: "BERMUDA" },
  { code: "BN", krName: "브루나이", enName: "BRUNEI DARUSSALAM" },
  { code: "BO", krName: "볼리비아", enName: "BOLIVIA" },
  { code: "BQ", krName: "보네르", enName: "BONAIRE" },
  { code: "BR", krName: "브라질", enName: "BRAZIL" },
  { code: "BS", krName: "바하마", enName: "BAHAMAS" },
  { code: "BT", krName: "부탄", enName: "BHUTAN" },
  { code: "BV", krName: "부베섬", enName: "BOUVET ISLAND" },
  { code: "BW", krName: "보츠와나", enName: "BOTSWANA" },
  { code: "BY", krName: "벨라루스", enName: "BELARUS" },
  { code: "BZ", krName: "벨리즈", enName: "BELIZE" },
  { code: "CA", krName: "캐나다", enName: "CANADA" },
  {
    code: "CC",
    krName: "코코스 제도",
    enName: "COCOS (KEELING) ISLANDS",
  },
  {
    code: "CD",
    krName: "콩고민주공화국",
    enName: "Democratic Republic of the Congo",
  },
  {
    code: "CF",
    krName: "중앙아프리카공화국",
    enName: "CENTRAL AFRICAN REPUBLIC",
  },
  { code: "CG", krName: "콩고", enName: "CONGO" },
  { code: "CH", krName: "스위스", enName: "SWITZERLAND" },
  { code: "CI", krName: "코트디부아르", enName: "COTE D`IVOIRE" },
  { code: "CK", krName: "쿡 제도", enName: "COOK ISLANDS" },
  { code: "CL", krName: "칠레", enName: "CHILE" },
  { code: "CM", krName: "카메룬", enName: "CAMEROON" },
  { code: "CN", krName: "중국", enName: "CHINA" },
  { code: "CO", krName: "콜롬비아", enName: "COLOMBIA" },
  { code: "CR", krName: "코스타리카", enName: "COSTA RICA" },
  { code: "CU", krName: "쿠바", enName: "CUBA" },
  { code: "CV", krName: "카보베르데", enName: "CAPE VERDE" },
  { code: "CW", krName: "큐라소", enName: "CURACAO" },
  { code: "CX", krName: "크리스마스섬", enName: "CHRISTMAS ISLAND" },
  { code: "CY", krName: "사이프러스", enName: "CYPRUS" },
  { code: "CZ", krName: "체코공화국", enName: "CZECH REPUBLIC" },
  { code: "DE", krName: "독일", enName: "GERMANY" },
  { code: "DJ", krName: "지부티", enName: "DJIBOUTI" },
  { code: "DK", krName: "덴마크", enName: "DENMARK" },
  { code: "DM", krName: "도미니카", enName: "DOMINICA" },
  { code: "DO", krName: "도미니카 공화국", enName: "DOMINICAN REPUBLIC" },
  { code: "DZ", krName: "알제리", enName: "ALGERIA" },
  { code: "EC", krName: "에쿠아도르", enName: "ECUADOR" },
  { code: "EE", krName: "에스토니아", enName: "ESTONIA" },
  { code: "EG", krName: "이집트", enName: "EGYPT" },
  { code: "EH", krName: "서사하라", enName: "WESTERN SAHARA" },
  { code: "ER", krName: "에리트레아", enName: "ERITREA" },
  { code: "ES", krName: "스페인", enName: "SPAIN" },
  { code: "ET", krName: "이디오피아", enName: "ETHIOPIA" },
  { code: "FI", krName: "핀란드", enName: "FINLAND" },
  { code: "FJ", krName: "피지", enName: "FIJI" },
  { code: "FK", krName: "포클랜드섬", enName: "FALKLAND ISLANDS" },
  { code: "FM", krName: "미크로네시아", enName: "MICRONESIA" },
  { code: "FO", krName: "페로 군도", enName: "FAROE ISLANDS" },
  { code: "FR", krName: "프랑스", enName: "FRANCE" },
  { code: "GA", krName: "가봉", enName: "GABON" },
  { code: "GB", krName: "영국", enName: "UNITED KINGDOM" },
  { code: "GD", krName: "그레나다", enName: "GRENADA" },
  { code: "GE", krName: "구루지아", enName: "GEORGIA" },
  { code: "GF", krName: "프랑스령 기아나", enName: "FRENCH GUIANA" },
  { code: "GG", krName: "건지", enName: "GUERNSEY" },
  { code: "GH", krName: "가나", enName: "GHANA" },
  { code: "GI", krName: "지브랄타", enName: "GIBRALTAR" },
  { code: "GL", krName: "그린랜드", enName: "GREENLAND" },
  { code: "GM", krName: "감비아", enName: "GAMBIA" },
  { code: "GN", krName: "기니", enName: "GUINEA" },
  { code: "GP", krName: "과들루프", enName: "GUADELOUPE" },
  { code: "GQ", krName: "적도 기니", enName: "EQUATORIAL GUINEA" },
  { code: "GR", krName: "그리스", enName: "GREECE" },
  {
    code: "GS",
    krName: "사우스조지아 사우스샌드위치 제도",
    enName: "SOUTH GEORGIA AND SOUTH SANDWICH LSLANDS",
  },
  { code: "GT", krName: "과테말라", enName: "GUATEMALA" },
  { code: "GU", krName: "괌", enName: "GUAM" },
  { code: "GW", krName: "기네비쏘", enName: "GUINEA-BISSAU" },
  { code: "GY", krName: "가이아나", enName: "GUYANA" },
  { code: "HK", krName: "홍콩", enName: "HONG KONG" },
  {
    code: "HM",
    krName: "허드 맥도날드 군도",
    enName: "HEARD AND MCDONALD ISLANDS",
  },
  { code: "HN", krName: "온두라스", enName: "HONDURAS" },
  { code: "HR", krName: "크로아티아", enName: "CROATIA" },
  { code: "HT", krName: "아이티", enName: "HAITI" },
  { code: "HU", krName: "헝가리", enName: "HUNGARY" },
  { code: "HW", krName: "하와이", enName: "HAWAII" },
  { code: "ID", krName: "인도네시아", enName: "INDONESIA" },
  { code: "IE", krName: "아일랜드", enName: "IRELAND" },
  { code: "IL", krName: "이스라엘", enName: "ISRAEL" },
  { code: "IM", krName: "맨섬", enName: "ISLE OF MAN" },
  { code: "IN", krName: "인도", enName: "INDIA" },
  {
    code: "IO",
    krName: "영인도 제도",
    enName: "BRITISH INDIAN OCEAN TERRITORY",
  },
  { code: "IQ", krName: "이라크", enName: "IRAQ" },
  { code: "IR", krName: "이란", enName: "IRAN" },
  { code: "IS", krName: "아이슬랜드", enName: "ICELAND" },
  { code: "IT", krName: "이탈리아", enName: "ITALY" },
  { code: "JE", krName: "저지", enName: "JERSEY" },
  { code: "JM", krName: "자메이카", enName: "JAMAICA" },
  { code: "JO", krName: "요르단", enName: "JORDAN" },
  { code: "JP", krName: "일본", enName: "JAPAN" },
  { code: "KE", krName: "케냐", enName: "KENYA" },
  { code: "KG", krName: "키르기스스탄", enName: "KYRGYZSTAN" },
  { code: "KH", krName: "캄보디아", enName: "CAMBODIA" },
  { code: "KI", krName: "키리바시", enName: "KIRIBATI" },
  { code: "KM", krName: "코모르", enName: "COMOROS" },
  {
    code: "KN",
    krName: "세인트 키츠 네비스",
    enName: "SAINT KITTS AND NEVIS",
  },
  { code: "KP", krName: "북한", enName: "NORTH KOREA" },
  { code: "KR", krName: "대한민국", enName: "KOREA" },
  { code: "KV", krName: "코소보", enName: "KOSOVO" },
  { code: "KW", krName: "쿠웨이트", enName: "KUWAIT" },
  { code: "KY", krName: "케이맨섬", enName: "CAYMAN ISLANDS" },
  { code: "KZ", krName: "카자흐스탄", enName: "KAZAKHSTAN" },
  { code: "LA", krName: "라오스", enName: "LAOS" },
  { code: "LB", krName: "레바논", enName: "LEBANON" },
  { code: "LC", krName: "세인트 루시아", enName: "SAINT LUCIA" },
  { code: "LI", krName: "리히텐슈타인", enName: "LIECHTENSTEIN" },
  { code: "LK", krName: "스리랑카", enName: "SRI LANKA" },
  { code: "LR", krName: "라이베리아", enName: "LIBERIA" },
  { code: "LS", krName: "레소토", enName: "LESOTHO" },
  { code: "LT", krName: "리투아니아", enName: "LITHUANIA" },
  { code: "LU", krName: "룩셈부르크", enName: "LUXEMBOURG" },
  { code: "LV", krName: "라트비아", enName: "LATVIA" },
  { code: "LY", krName: "리비아", enName: "LIBYAN ARAB JAMAHIRIYA" },
  { code: "MA", krName: "모로코", enName: "MOROCCO" },
  { code: "MC", krName: "모나코", enName: "MONACO" },
  { code: "MD", krName: "몰도바", enName: "MOLDOVA" },
  { code: "ME", krName: "몬테네그로", enName: "MONTENEGRO" },
  {
    code: "MF",
    krName: "세인트 마틴",
    enName: "SAINT MARTIN (FRENCH PART)",
  },
  { code: "MG", krName: "마다가스카르", enName: "MADAGASCAR" },
  { code: "MH", krName: "마샬군도", enName: "MARSHALL ISLANDS" },
  { code: "MK", krName: "마케도니아", enName: "MACEDONIA" },
  { code: "ML", krName: "말리", enName: "MALI" },
  { code: "MM", krName: "미얀마", enName: "MYANMAR" },
  { code: "MN", krName: "몽골", enName: "MONGOLIA" },
  { code: "MO", krName: "마카오", enName: "MACAU" },
  {
    code: "MP",
    krName: "북마리아나 군도",
    enName: "NORTHERN MARIANA ISLANDS",
  },
  { code: "MQ", krName: "마르티니크", enName: "MARTINIQUE" },
  { code: "MR", krName: "모리타니", enName: "MAURITANIA" },
  { code: "MS", krName: "몬트세라트", enName: "MONTSERRAT" },
  { code: "MT", krName: "말타", enName: "MALTA" },
  { code: "MU", krName: "모리셔스", enName: "MAURITIUS" },
  { code: "MV", krName: "몰디브", enName: "MALDIVES" },
  { code: "MW", krName: "말라위", enName: "MALAWI" },
  { code: "MX", krName: "멕시코", enName: "MEXICO" },
  { code: "MY", krName: "말레이시아", enName: "MALAYSIA" },
  { code: "MZ", krName: "모잠비크", enName: "MOZAMBIQUE" },
  { code: "NA", krName: "나미비아", enName: "NAMIBIA" },
  { code: "NC", krName: "뉴칼레도니아", enName: "NEW CALEDONIA" },
  { code: "NE", krName: "니제르", enName: "NIGER" },
  { code: "NF", krName: "노퍽섬", enName: "NORFOLK ISLAND" },
  { code: "NG", krName: "나이지리아", enName: "NIGERIA" },
  { code: "NI", krName: "니카라과", enName: "NICARAGUA" },
  { code: "NL", krName: "네덜란드", enName: "NETHERLANDS" },
  { code: "NO", krName: "노르웨이", enName: "NORWAY" },
  { code: "NP", krName: "네팔", enName: "NEPAL" },
  { code: "NR", krName: "나우루", enName: "NAURU" },
  { code: "NT", krName: "중립지대", enName: "NEUTRAL ZONE" },
  { code: "NU", krName: "니우에", enName: "NIUE" },
  { code: "NZ", krName: "뉴질랜드", enName: "NEW ZEALAND" },
  { code: "OM", krName: "오만", enName: "OMAN" },
  { code: "PA", krName: "파나마", enName: "PANAMA" },
  { code: "PE", krName: "페루", enName: "PERU" },
  {
    code: "PF",
    krName: "프랑스령 폴리네시아",
    enName: "FRENCH POLYNESIA",
  },
  { code: "PG", krName: "파푸아뉴기니", enName: "PAPUA NEW GUINEA" },
  { code: "PH", krName: "필리핀", enName: "PHILIPPINES" },
  { code: "PK", krName: "파키스탄", enName: "PAKISTAN" },
  { code: "PL", krName: "폴란드", enName: "POLAND" },
  {
    code: "PM",
    krName: "세인트 피에르 미?론",
    enName: "SAINT PIERRE AND MIQUELON",
  },
  { code: "PN", krName: "핏케언 군도", enName: "PITCAIRN" },
  { code: "PR", krName: "푸에르토리코", enName: "PUERTO RICO" },
  { code: "PS", krName: "팔레스타인", enName: "PALESTINE" },
  { code: "PT", krName: "포르투갈", enName: "PORTUGAL" },
  { code: "PW", krName: "팔라우", enName: "PALAU" },
  { code: "PY", krName: "파라과이", enName: "PARAGUAY" },
  { code: "QA", krName: "카타르", enName: "QATAR" },
  { code: "RE", krName: "리유니언", enName: "REUNION" },
  { code: "RO", krName: "루마니아", enName: "ROMANIA" },
  { code: "RS", krName: "세르비아", enName: "SERBIA" },
  { code: "RU", krName: "러시아", enName: "RUSSIAN FEDERATION" },
  { code: "RW", krName: "르완다", enName: "RWANDA" },
  { code: "SA", krName: "사우디아라비아", enName: "SAUDI ARABIA" },
  { code: "SB", krName: "솔로몬 군도", enName: "SOLOMON ISLANDS" },
  { code: "SC", krName: "세이셸", enName: "SEYCHELLES" },
  { code: "SD", krName: "수단", enName: "SUDAN" },
  { code: "SE", krName: "스웨덴", enName: "SWEDEN" },
  { code: "SG", krName: "싱가포르", enName: "SINGAPORE" },
  { code: "SH", krName: "세인트 헬레나", enName: "SAINT HELENA" },
  { code: "SI", krName: "슬로베니아", enName: "SLOVENIA" },
  {
    code: "SJ",
    krName: "스발바르드 얀마이엔 제도",
    enName: "SVALBARD AND JAN MAYEN ISLANDS",
  },
  { code: "SK", krName: "슬로바키아", enName: "SLOVAKIA" },
  { code: "SL", krName: "시에라리온", enName: "SIERRA LEONE" },
  { code: "SM", krName: "산마리노", enName: "SAN MARINO" },
  { code: "SN", krName: "세네갈", enName: "SENEGAL" },
  { code: "SO", krName: "소말리아", enName: "SOMALIA" },
  { code: "SR", krName: "수리남", enName: "SURIenName" },
  { code: "SS", krName: "남수단", enName: "SOUTH SUDAN" },
  {
    code: "ST",
    krName: "쌍투메 프린시페",
    enName: "SAO TOME AND PRINCIPE",
  },
  { code: "SV", krName: "엘살바도르", enName: "EL SALVADOR" },
  {
    code: "SX",
    krName: "신트마르텐",
    enName: "SINT MAARTEN (DUTCH PART)",
  },
  { code: "SY", krName: "시리아", enName: "SYRIAN ARAB REPUBLIC" },
  { code: "SZ", krName: "스와질랜드", enName: "SWAZILAND" },
  {
    code: "TC",
    krName: "터크스 카이코스 제도",
    enName: "TURKS AND CAICOS ISLANDS",
  },
  { code: "TD", krName: "차드", enName: "CHAD" },
  {
    code: "TF",
    krName: "프랑스 남부지역",
    enName: "FRENCH SOUTHERN TERRITORIES",
  },
  { code: "TG", krName: "토고", enName: "TOGO" },
  { code: "TH", krName: "태국", enName: "THAILAND" },
  { code: "TJ", krName: "타지키스탄", enName: "TAJIKISTAN" },
  { code: "TK", krName: "토켈라우", enName: "TOKELAU" },
  { code: "TL", krName: "동티모르", enName: "EAST TIMOR" },
  { code: "TM", krName: "투르크메니스탄", enName: "TURKMENISTAN" },
  { code: "TN", krName: "튀니지", enName: "TUNISIA" },
  { code: "TO", krName: "통가", enName: "TONGA" },
  { code: "TR", krName: "터키", enName: "TURKEY" },
  {
    code: "TT",
    krName: "트리니다드토바고",
    enName: "TRINIDAD AND TOBAGO",
  },
  { code: "TV", krName: "투발루", enName: "TUVALU" },
  { code: "TW", krName: "대만", enName: "TAIWAN" },
  { code: "TZ", krName: "탄자니아", enName: "TANZANIA" },
  { code: "UA", krName: "우크라이나", enName: "UKRAINE" },
  { code: "UG", krName: "우간다", enName: "UGANDA" },
  {
    code: "UM",
    krName: "미국령 소군도",
    enName: "UNITED STATES MINOR OUTLYING ISLANDS",
  },
  { code: "US", krName: "미국", enName: "UNITED STATES" },
  { code: "UY", krName: "우루과이", enName: "URUGUAY" },
  { code: "UZ", krName: "우즈베키스탄", enName: "UZBEKISTAN" },
  { code: "VA", krName: "바티칸", enName: "VATICAN CITY STATE" },
  {
    code: "VC",
    krName: "세인트 빈센트 그레나딘스",
    enName: "SAINT VINCENT AND THE GRENADINES",
  },
  { code: "VE", krName: "베네수엘라", enName: "VENEZUELA" },
  {
    code: "VG",
    krName: "영국령 버진아일랜드",
    enName: "VIRGIN ISLANDS (BRITISH)",
  },
  {
    code: "VI",
    krName: "미국령 버진아일랜드",
    enName: "VIRGIN ISLANDS (U.S.)",
  },
  { code: "VN", krName: "베트남", enName: "VIET NAM" },
  { code: "VU", krName: "바누아투", enName: "VANUATU" },
  {
    code: "WF",
    krName: "월리스 후트나",
    enName: "WALLIS AND FUTUNA ISLANDS",
  },
  { code: "WS", krName: "사모아", enName: "SAMOA" },
  { code: "YE", krName: "예멘", enName: "YEMEN" },
  { code: "YT", krName: "마요트", enName: "MAYOTTE" },
  { code: "YU", krName: "유고슬라비아", enName: "YUGOSLAVIA" },
  { code: "ZA", krName: "남아프리카공화국", enName: "SOUTH AFRICA" },
  { code: "ZM", krName: "잠비아", enName: "ZAMBIA" },
  { code: "ZR", krName: "자이르", enName: "ZAIRE" },
  { code: "ZW", krName: "짐바브웨", enName: "ZIMBABWE" },
  { code: "ZZ", krName: "국적불명", enName: "UNKNOWN" },
];

const tableBody = document.getElementById("countryTableBody");
const searchInput = document.getElementById("searchInput");
const paginationButtons = document.getElementById("paginationButtons");

let currentPage = 1;

function search() {
  currentPage = 1;
  const searchTerm = searchInput.value.toUpperCase();
  const filteredList = countryList.filter(
    (country) =>
      country.code.toUpperCase().includes(searchTerm) ||
      country.krName.toUpperCase().includes(searchTerm) ||
      country.enName.toUpperCase().includes(searchTerm)
  );
  updateTable(filteredList);
}

function resetTable() {
  searchInput.value = "";
  currentPage = 1;
  updateTable(countryList);
}

function updateTable(data) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

  // 기존의 테이블 행을 지우기
  tableBody.innerHTML = "";

  if (data.length > 0) {
    // 일치하는 데이터로 테이블 채우기
    displayedData.forEach((country) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${country.code}</td><td>${country.krName}</td><td>${country.enName}</td>`;
      tableBody.appendChild(row);
    });
  } else {
    // 일치하는 데이터로 테이블 채우기
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan=3 style="text-align: center;">검색 조회 결과가 없습니다.</td>`;
    tableBody.appendChild(row);
  }

  // 페이지네이션 버튼 업데이트
  updatePaginationButtons(data.length);

  // Display information about the number of items
  const tableInfo = document.getElementById("tableInfo");
  tableInfo.textContent = `총 ${countryList.length}국가 중 ${data.length}국가가 검색되었습니다.`;
}

function updatePaginationButtons(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPageButtons = 5; // 표시할 최대 페이지 버튼 수를 설정하세요

  paginationButtons.innerHTML = "";

  const searchTerm = searchInput.value.toUpperCase();
  const filteredList = countryList.filter(
    (country) =>
      country.code.toUpperCase().includes(searchTerm) ||
      country.krName.toUpperCase().includes(searchTerm) ||
      country.enName.toUpperCase().includes(searchTerm)
  );

  // "맨 처음" 버튼 생성
  const firstPageButton = document.createElement("button");
  firstPageButton.textContent = "<<";
  firstPageButton.onclick = () => {
    currentPage = 1;
    updateTable(filteredList);
  };
  if (filteredList.length > 0) {
    paginationButtons.appendChild(firstPageButton);
  }

  // "이전그룹" 버튼 생성
  if (currentPage > 1) {
    const prevGroupButton = document.createElement("button");
    prevGroupButton.textContent = "<";
    prevGroupButton.onclick = () => {
      const currentGroup = Math.ceil(currentPage / maxPageButtons);
      const newGroup = Math.max(1, currentGroup - 1);
      currentPage = (newGroup - 1) * maxPageButtons + 1;

      updateTable(filteredList);
    };
    if (filteredList.length > 0) {
      paginationButtons.appendChild(prevGroupButton);
    }
  }

  // 페이지 버튼을 표시하기 위한 시작 및 끝 페이지 번호 계산
  let startPage =
    (Math.ceil(currentPage / maxPageButtons) - 1) * maxPageButtons + 1;
  let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  if (filteredList.length > 0) {
    for (let i = startPage; i <= endPage; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.onclick = () => {
        currentPage = i;
        updateTable(filteredList);
      };
      paginationButtons.appendChild(button);
    }
  } else {
    const button = document.createElement("button");
    button.textContent = 1;
    paginationButtons.appendChild(button);
  }

  // "다음그룹" 버튼 생성
  if (currentPage < totalPages) {
    const nextGroupButton = document.createElement("button");
    nextGroupButton.textContent = ">";
    nextGroupButton.onclick = () => {
      const currentGroup = Math.ceil(currentPage / maxPageButtons);
      const newGroup = currentGroup + 1;
      const firstPageOfGroup = (newGroup - 1) * maxPageButtons + 1;
      currentPage = Math.min(firstPageOfGroup, totalPages);

      updateTable(filteredList);
    };
    if (filteredList.length > 0) {
      paginationButtons.appendChild(nextGroupButton);
    }
  }

  // "맨 마지막" 버튼 생성
  const lastPageButton = document.createElement("button");
  lastPageButton.textContent = ">>";
  lastPageButton.onclick = () => {
    currentPage = totalPages;
    updateTable(filteredList);
  };
  if (filteredList.length > 0) {
    paginationButtons.appendChild(lastPageButton);
  }
}

// Enter 키 입력 시 검색 실행
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    search();
  }
});

// 페이지 로딩 시 검색 입력란에 포커스 설정 및 초기 테이블 업데이트
window.onload = function () {
  searchInput.focus();
  updateTable(countryList);
};
