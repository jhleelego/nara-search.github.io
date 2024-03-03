const itemsPerPage = 10;

const countryList = [
  { code: "AD", phoneNum: "+376", krName: "안도라", enName: "ANDORRA" },
  {
    code: "AE",
    phoneNum: "+971",

    krName: "아랍에미리트",
    enName: "UNITED ARAB EMIRATES",
  },
  {
    code: "AF",
    phoneNum: "+93",

    krName: "아프가니스탄",
    enName: "AFGHANISTAN",
  },
  {
    code: "AG",
    phoneNum: "+1-268",

    krName: "안티구아 바부다",
    enName: "ANTIGUA AND BARBUDA",
  },
  { code: "AI", phoneNum: "+1-264", krName: "앙길라", enName: "ANGUILLA" },
  { code: "AL", phoneNum: "+355", krName: "알바니아", enName: "ALBANIA" },
  { code: "AM", phoneNum: "+374", krName: "아르메니아", enName: "ARMENIA" },
  {
    code: "AN",
    phoneNum: "+599",

    krName: "네덜란드령 안틸레스",
    enName: "NETHERLANDS ANTILLES",
  },
  { code: "AO", phoneNum: "+244", krName: "앙골라", enName: "ANGOLA" },
  {
    code: "AQ",
    phoneNum: "+672",

    krName: "안타티카",
    enName: "ANTARCTICA",
  },
  {
    code: "AR",
    phoneNum: "+54",

    krName: "아르헨티나",
    enName: "ARGENTINA",
  },
  {
    code: "AS",
    phoneNum: "+1-684",

    krName: "아메리칸 사모아",
    enName: "AMERICAN SAMOA",
  },
  { code: "AT", phoneNum: "+43", krName: "오스트리아", enName: "AUSTRIA" },
  { code: "AU", phoneNum: "+61", krName: "호주", enName: "AUSTRALIA" },
  { code: "AW", phoneNum: "+297", krName: "아루바", enName: "ARUBA" },
  {
    code: "AX",
    phoneNum: "+358-18",

    krName: "알랜드 군도",
    enName: "ALAND ISLANDS",
  },
  {
    code: "AZ",
    phoneNum: "+994",

    krName: "아제르바이잔",
    enName: "AZERBAIJAN",
  },
  {
    code: "BA",
    phoneNum: "+387",

    krName: "보스니아 헤르체고비나",
    enName: "BOSNIA HERCEGOVINA",
  },
  {
    code: "BB",
    phoneNum: "+1-246",

    krName: "바베이도스",
    enName: "BARBADOS",
  },
  {
    code: "BD",
    phoneNum: "+880",

    krName: "방글라데시",
    enName: "BANGLADESH",
  },
  { code: "BE", phoneNum: "+32", krName: "벨기에", enName: "BELGIUM" },
  {
    code: "BF",
    phoneNum: "+226",

    krName: "부르키나파소",
    enName: "BURKINA FASO",
  },
  { code: "BG", phoneNum: "+359", krName: "불가리아", enName: "BULGARIA" },
  { code: "BH", phoneNum: "+973", krName: "바레인", enName: "BAHRAIN" },
  { code: "BI", phoneNum: "+257", krName: "브룬디", enName: "BURUNDI" },
  { code: "BJ", phoneNum: "+229", krName: "베냉", enName: "BENIN" },
  {
    code: "BL",
    phoneNum: "+590",

    krName: "세인트 바르탤르미",
    enName: "SAINT BARTHELEMY",
  },
  { code: "BM", phoneNum: "+1-441", krName: "버뮤다", enName: "BERMUDA" },
  {
    code: "BN",
    phoneNum: "+673",

    krName: "브루나이",
    enName: "BRUNEI DARUSSALAM",
  },
  { code: "BO", phoneNum: "+591", krName: "볼리비아", enName: "BOLIVIA" },

  { code: "BQ", phoneNum: "+599", krName: "보네르", enName: "BONAIRE" },
  { code: "BR", phoneNum: "+55", krName: "브라질", enName: "BRAZIL" },
  { code: "BS", phoneNum: "+1-242", krName: "바하마", enName: "BAHAMAS" },
  { code: "BT", phoneNum: "+975", krName: "부탄", enName: "BHUTAN" },
  { code: "BV", phoneNum: "", krName: "부베섬", enName: "BOUVET ISLAND" },
  { code: "BW", phoneNum: "+267", krName: "보츠와나", enName: "BOTSWANA" },
  { code: "BY", phoneNum: "+375", krName: "벨라루스", enName: "BELARUS" },
  { code: "BZ", phoneNum: "+501", krName: "벨리즈", enName: "BELIZE" },
  { code: "CA", phoneNum: "+1", krName: "캐나다", enName: "CANADA" },
  {
    code: "CC",
    phoneNum: "+61",

    krName: "코코스 제도",
    enName: "COCOS (KEELING) ISLANDS",
  },
  {
    code: "CD",
    phoneNum: "+243",

    krName: "콩고민주공화국",
    enName: "Democratic Republic of the Congo",
  },
  {
    code: "CF",
    phoneNum: "+236",

    krName: "중앙아프리카공화국",
    enName: "CENTRAL AFRICAN REPUBLIC",
  },
  { code: "CG", phoneNum: "+242", krName: "콩고", enName: "CONGO" },
  { code: "CH", phoneNum: "+41", krName: "스위스", enName: "SWITZERLAND" },
  {
    code: "CI",
    phoneNum: "+225",

    krName: "코트디부아르",
    enName: "COTE D`IVOIRE",
  },
  {
    code: "CK",
    phoneNum: "+682",

    krName: "쿡 제도",
    enName: "COOK ISLANDS",
  },
  { code: "CL", phoneNum: "+56", krName: "칠레", enName: "CHILE" },
  { code: "CM", phoneNum: "+237", krName: "카메룬", enName: "CAMEROON" },
  { code: "CN", phoneNum: "+86", krName: "중국", enName: "CHINA" },
  { code: "CO", phoneNum: "+57", krName: "콜롬비아", enName: "COLOMBIA" },
  {
    code: "CR",
    phoneNum: "+506",

    krName: "코스타리카",
    enName: "COSTA RICA",
  },
  { code: "CU", phoneNum: "+53", krName: "쿠바", enName: "CUBA" },
  {
    code: "CV",
    phoneNum: "+238",

    krName: "카보베르데",
    enName: "CAPE VERDE",
  },
  { code: "CW", phoneNum: "+599", krName: "큐라소", enName: "CURACAO" },
  {
    code: "CX",
    phoneNum: "+61",

    krName: "크리스마스섬",
    enName: "CHRISTMAS ISLAND",
  },
  { code: "CY", phoneNum: "+357", krName: "사이프러스", enName: "CYPRUS" },
  {
    code: "CZ",
    phoneNum: "+420",

    krName: "체코공화국",
    enName: "CZECH REPUBLIC",
  },

  { code: "DE", phoneNum: "+49", krName: "독일", enName: "GERMANY" },
  { code: "DJ", phoneNum: "+253", krName: "지부티", enName: "DJIBOUTI" },
  { code: "DK", phoneNum: "+45", krName: "덴마크", enName: "DENMARK" },
  {
    code: "DM",
    phoneNum: "+1-767",

    krName: "도미니카",
    enName: "DOMINICA",
  },
  {
    code: "DO",
    phoneNum: "+1-809, +1-829, +1-849",

    krName: "도미니카 공화국",
    enName: "DOMINICAN REPUBLIC",
  },
  { code: "DZ", phoneNum: "+213", krName: "알제리", enName: "ALGERIA" },
  { code: "EC", phoneNum: "+593", krName: "에쿠아도르", enName: "ECUADOR" },
  { code: "EE", phoneNum: "+372", krName: "에스토니아", enName: "ESTONIA" },
  { code: "EG", phoneNum: "+20", krName: "이집트", enName: "EGYPT" },
  {
    code: "EH",
    phoneNum: "+212",

    krName: "서사하라",
    enName: "WESTERN SAHARA",
  },
  { code: "ER", phoneNum: "+291", krName: "에리트레아", enName: "ERITREA" },
  { code: "ES", phoneNum: "+34", krName: "스페인", enName: "SPAIN" },
  {
    code: "ET",
    phoneNum: "+251",

    krName: "이디오피아",
    enName: "ETHIOPIA",
  },
  { code: "FI", phoneNum: "+358", krName: "핀란드", enName: "FINLAND" },
  { code: "FJ", phoneNum: "+679", krName: "피지", enName: "FIJI" },
  {
    code: "FK",
    phoneNum: "+500",

    krName: "포클랜드섬",
    enName: "FALKLAND ISLANDS",
  },
  {
    code: "FM",
    phoneNum: "+691",

    krName: "미크로네시아",
    enName: "MICRONESIA",
  },
  {
    code: "FO",
    phoneNum: "+298",

    krName: "페로 군도",
    enName: "FAROE ISLANDS",
  },
  { code: "FR", phoneNum: "+33", krName: "프랑스", enName: "FRANCE" },
  { code: "GA", phoneNum: "+241", krName: "가봉", enName: "GABON" },
  { code: "GB", phoneNum: "+44", krName: "영국", enName: "UNITED KINGDOM" },
  { code: "GD", phoneNum: "+1-473", krName: "그레나다", enName: "GRENADA" },
  { code: "GE", phoneNum: "+995", krName: "구루지아", enName: "GEORGIA" },
  {
    code: "GF",
    phoneNum: "+594",

    krName: "프랑스령 기아나",
    enName: "FRENCH GUIANA",
  },
  { code: "GG", phoneNum: "+44", krName: "건지", enName: "GUERNSEY" },
  { code: "GH", phoneNum: "+233", krName: "가나", enName: "GHANA" },
  { code: "GI", phoneNum: "+350", krName: "지브랄타", enName: "GIBRALTAR" },
  { code: "GL", phoneNum: "+299", krName: "그린랜드", enName: "GREENLAND" },
  { code: "GM", phoneNum: "+220", krName: "감비아", enName: "GAMBIA" },
  { code: "GN", phoneNum: "+224", krName: "기니", enName: "GUINEA" },
  {
    code: "GP",
    phoneNum: "+590",

    krName: "과들루프",
    enName: "GUADELOUPE",
  },
  {
    code: "GQ",
    phoneNum: "+240",

    krName: "적도 기니",
    enName: "EQUATORIAL GUINEA",
  },
  { code: "GR", phoneNum: "+30", krName: "그리스", enName: "GREECE" },
  {
    code: "GS",
    phoneNum: "+500",

    krName: "사우스조지아 사우스샌드위치 제도",
    enName: "SOUTH GEORGIA AND SOUTH SANDWICH LSLANDS",
  },
  { code: "GT", phoneNum: "+502", krName: "과테말라", enName: "GUATEMALA" },
  { code: "GU", phoneNum: "+1-671", krName: "괌", enName: "GUAM" },
  {
    code: "GW",
    phoneNum: "+245",

    krName: "기네비쏘",
    enName: "GUINEA-BISSAU",
  },
  { code: "GY", phoneNum: "+592", krName: "가이아나", enName: "GUYANA" },
  { code: "HK", phoneNum: "+852", krName: "홍콩", enName: "HONG KONG" },
  {
    code: "HM",
    phoneNum: "+672",

    krName: "허드 맥도날드 군도",
    enName: "HEARD AND MCDONALD ISLANDS",
  },
  { code: "HN", phoneNum: "+504", krName: "온두라스", enName: "HONDURAS" },
  { code: "HR", phoneNum: "+385", krName: "크로아티아", enName: "CROATIA" },
  { code: "HT", phoneNum: "+509", krName: "아이티", enName: "HAITI" },
  { code: "HU", phoneNum: "+36", krName: "헝가리", enName: "HUNGARY" },
  { code: "HW", phoneNum: "", krName: "하와이", enName: "HAWAII" },
  {
    code: "ID",
    phoneNum: "+62",

    krName: "인도네시아",
    enName: "INDONESIA",
  },
  { code: "IE", phoneNum: "+353", krName: "아일랜드", enName: "IRELAND" },
  { code: "IL", phoneNum: "+972", krName: "이스라엘", enName: "ISRAEL" },
  { code: "IM", phoneNum: "+44", krName: "맨섬", enName: "ISLE OF MAN" },
  { code: "IN", phoneNum: "+91", krName: "인도", enName: "INDIA" },
  {
    code: "IO",
    phoneNum: "+246",
    krName: "영인도 제도",
    enName: "BRITISH INDIAN OCEAN TERRITORY",
  },
  { code: "IQ", phoneNum: "+964", krName: "이라크", enName: "IRAQ" },
  { code: "IR", phoneNum: "+98", krName: "이란", enName: "IRAN" },
  { code: "IS", phoneNum: "+354", krName: "아이슬랜드", enName: "ICELAND" },
  { code: "IT", phoneNum: "+39", krName: "이탈리아", enName: "ITALY" },
  { code: "JE", phoneNum: "+44", krName: "저지", enName: "JERSEY" },
  { code: "JM", phoneNum: "+1-876", krName: "자메이카", enName: "JAMAICA" },
  { code: "JO", phoneNum: "+962", krName: "요르단", enName: "JORDAN" },
  { code: "JP", phoneNum: "+81", krName: "일본", enName: "JAPAN" },
  { code: "KE", phoneNum: "+254", krName: "케냐", enName: "KENYA" },
  {
    code: "KG",
    phoneNum: "+996",
    krName: "키르기스스탄",
    enName: "KYRGYZSTAN",
  },
  { code: "KH", phoneNum: "+855", krName: "캄보디아", enName: "CAMBODIA" },
  { code: "KI", phoneNum: "+686", krName: "키리바시", enName: "KIRIBATI" },
  { code: "KM", phoneNum: "+269", krName: "코모르", enName: "COMOROS" },
  {
    code: "KN",
    phoneNum: "+1-869",
    krName: "세인트 키츠 네비스",
    enName: "SAINT KITTS AND NEVIS",
  },
  { code: "KP", phoneNum: "+850", krName: "북한", enName: "NORTH KOREA" },
  { code: "KR", phoneNum: "+82", krName: "대한민국", enName: "KOREA" },
  { code: "KV", phoneNum: "+383", krName: "코소보", enName: "KOSOVO" },
  { code: "KW", phoneNum: "+965", krName: "쿠웨이트", enName: "KUWAIT" },
  {
    code: "KY",
    phoneNum: "+1-345",
    krName: "케이맨섬",
    enName: "CAYMAN ISLANDS",
  },
  { code: "KZ", phoneNum: "+7", krName: "카자흐스탄", enName: "KAZAKHSTAN" },
  { code: "LA", phoneNum: "+856", krName: "라오스", enName: "LAOS" },
  { code: "LB", phoneNum: "+961", krName: "레바논", enName: "LEBANON" },
  {
    code: "LC",
    phoneNum: "+1-758",
    krName: "세인트 루시아",
    enName: "SAINT LUCIA",
  },
  {
    code: "LI",
    phoneNum: "+423",
    krName: "리히텐슈타인",
    enName: "LIECHTENSTEIN",
  },
  { code: "LK", phoneNum: "+94", krName: "스리랑카", enName: "SRI LANKA" },
  { code: "LR", phoneNum: "+231", krName: "라이베리아", enName: "LIBERIA" },
  { code: "LS", phoneNum: "+266", krName: "레소토", enName: "LESOTHO" },
  { code: "LT", phoneNum: "+370", krName: "리투아니아", enName: "LITHUANIA" },
  { code: "LU", phoneNum: "+352", krName: "룩셈부르크", enName: "LUXEMBOURG" },
  { code: "LV", phoneNum: "+371", krName: "라트비아", enName: "LATVIA" },
  {
    code: "LY",
    phoneNum: "+218",
    krName: "리비아",
    enName: "LIBYAN ARAB JAMAHIRIYA",
  },
  { code: "MA", phoneNum: "+212", krName: "모로코", enName: "MOROCCO" },
  { code: "MC", phoneNum: "+377", krName: "모나코", enName: "MONACO" },
  { code: "MD", phoneNum: "+373", krName: "몰도바", enName: "MOLDOVA" },
  { code: "ME", phoneNum: "+382", krName: "몬테네그로", enName: "MONTENEGRO" },
  {
    code: "MF",
    phoneNum: "+590",
    krName: "세인트 마틴",
    enName: "SAINT MARTIN (FRENCH PART)",
  },
  {
    code: "MG",
    phoneNum: "+261",
    krName: "마다가스카르",
    enName: "MADAGASCAR",
  },
  {
    code: "MH",
    phoneNum: "+692",
    krName: "마샬군도",
    enName: "MARSHALL ISLANDS",
  },
  { code: "MK", phoneNum: "+389", krName: "마케도니아", enName: "MACEDONIA" },
  { code: "ML", phoneNum: "+223", krName: "말리", enName: "MALI" },
  { code: "MM", phoneNum: "+95", krName: "미얀마", enName: "MYANMAR" },
  { code: "MN", phoneNum: "+976", krName: "몽골", enName: "MONGOLIA" },
  { code: "MO", phoneNum: "+853", krName: "마카오", enName: "MACAU" },
  {
    code: "MP",
    phoneNum: "+1-670",
    krName: "북마리아나 군도",
    enName: "NORTHERN MARIANA ISLANDS",
  },
  { code: "MQ", phoneNum: "+596", krName: "마르티니크", enName: "MARTINIQUE" },
  { code: "MR", phoneNum: "+222", krName: "모리타니", enName: "MAURITANIA" },
  {
    code: "MS",
    phoneNum: "+1-664",
    krName: "몬트세라트",
    enName: "MONTSERRAT",
  },
  { code: "MT", phoneNum: "+356", krName: "말타", enName: "MALTA" },
  { code: "MU", phoneNum: "+230", krName: "모리셔스", enName: "MAURITIUS" },
  { code: "MV", phoneNum: "+960", krName: "몰디브", enName: "MALDIVES" },
  { code: "MW", phoneNum: "+265", krName: "말라위", enName: "MALAWI" },
  { code: "MX", phoneNum: "+52", krName: "멕시코", enName: "MEXICO" },
  { code: "MY", phoneNum: "+60", krName: "말레이시아", enName: "MALAYSIA" },
  { code: "MZ", phoneNum: "+258", krName: "모잠비크", enName: "MOZAMBIQUE" },
  { code: "NA", phoneNum: "+264", krName: "나미비아", enName: "NAMIBIA" },
  {
    code: "NC",
    phoneNum: "+687",
    krName: "뉴칼레도니아",
    enName: "NEW CALEDONIA",
  },
  { code: "NE", phoneNum: "+227", krName: "니제르", enName: "NIGER" },
  { code: "NF", phoneNum: "+672", krName: "노퍽섬", enName: "NORFOLK ISLAND" },
  { code: "NG", phoneNum: "+234", krName: "나이지리아", enName: "NIGERIA" },
  { code: "NI", phoneNum: "+505", krName: "니카라과", enName: "NICARAGUA" },
  { code: "NL", phoneNum: "+31", krName: "네덜란드", enName: "NETHERLANDS" },
  { code: "NO", phoneNum: "+47", krName: "노르웨이", enName: "NORWAY" },
  { code: "NP", phoneNum: "+977", krName: "네팔", enName: "NEPAL" },
  { code: "NR", phoneNum: "+674", krName: "나우루", enName: "NAURU" },
  { code: "NT", phoneNum: "", krName: "중립지대", enName: "NEUTRAL ZONE" },
  { code: "NU", phoneNum: "+683", krName: "니우에", enName: "NIUE" },
  { code: "NZ", phoneNum: "+64", krName: "뉴질랜드", enName: "NEW ZEALAND" },
  { code: "OM", phoneNum: "+968", krName: "오만", enName: "OMAN" },
  { code: "PA", phoneNum: "+507", krName: "파나마", enName: "PANAMA" },
  { code: "PE", phoneNum: "+51", krName: "페루", enName: "PERU" },
  {
    code: "PF",
    phoneNum: "+689",
    krName: "프랑스령 폴리네시아",
    enName: "FRENCH POLYNESIA",
  },
  {
    code: "PG",
    phoneNum: "+675",
    krName: "파푸아뉴기니",
    enName: "PAPUA NEW GUINEA",
  },
  { code: "PH", phoneNum: "+63", krName: "필리핀", enName: "PHILIPPINES" },
  { code: "PK", phoneNum: "+92", krName: "파키스탄", enName: "PAKISTAN" },
  { code: "PL", phoneNum: "+48", krName: "폴란드", enName: "POLAND" },
  {
    code: "PM",
    phoneNum: "+508",
    krName: "세인트 피에르 미클롱",
    enName: "SAINT PIERRE AND MIQUELON",
  },
  { code: "PN", phoneNum: "+872", krName: "핏케언 군도", enName: "PITCAIRN" },
  {
    code: "PR",
    phoneNum: "+1-787",
    krName: "푸에르토리코",
    enName: "PUERTO RICO",
  },
  { code: "PS", phoneNum: "+970", krName: "팔레스타인", enName: "PALESTINE" },
  { code: "PT", phoneNum: "+351", krName: "포르투갈", enName: "PORTUGAL" },
  { code: "PW", phoneNum: "+680", krName: "팔라우", enName: "PALAU" },
  { code: "PY", phoneNum: "+595", krName: "파라과이", enName: "PARAGUAY" },
  { code: "QA", phoneNum: "+974", krName: "카타르", enName: "QATAR" },
  { code: "RE", phoneNum: "+262", krName: "리유니언", enName: "REUNION" },
  { code: "RO", phoneNum: "+40", krName: "루마니아", enName: "ROMANIA" },
  { code: "RS", phoneNum: "+381", krName: "세르비아", enName: "SERBIA" },
  {
    code: "RU",
    phoneNum: "+7",
    krName: "러시아",
    enName: "RUSSIAN FEDERATION",
  },
  { code: "RW", phoneNum: "+250", krName: "르완다", enName: "RWANDA" },
  {
    code: "SA",
    phoneNum: "+966",
    krName: "사우디아라비아",
    enName: "SAUDI ARABIA",
  },
  {
    code: "SB",
    phoneNum: "+677",
    krName: "솔로몬 군도",
    enName: "SOLOMON ISLANDS",
  },
  { code: "SC", phoneNum: "+248", krName: "세이셸", enName: "SEYCHELLES" },
  { code: "SD", phoneNum: "+249", krName: "수단", enName: "SUDAN" },
  { code: "SE", phoneNum: "+46", krName: "스웨덴", enName: "SWEDEN" },
  { code: "SG", phoneNum: "+65", krName: "싱가포르", enName: "SINGAPORE" },
  {
    code: "SH",
    phoneNum: "+290",
    krName: "세인트 헬레나",
    enName: "SAINT HELENA",
  },
  { code: "SI", phoneNum: "+386", krName: "슬로베니아", enName: "SLOVENIA" },
  {
    code: "SJ",
    phoneNum: "+47",
    krName: "스발바르드 얀마이엔 제도",
    enName: "SVALBARD AND JAN MAYEN ISLANDS",
  },
  { code: "SK", phoneNum: "+421", krName: "슬로바키아", enName: "SLOVAKIA" },
  {
    code: "SL",
    phoneNum: "+232",
    krName: "시에라리온",
    enName: "SIERRA LEONE",
  },
  { code: "SM", phoneNum: "+378", krName: "산마리노", enName: "SAN MARINO" },
  { code: "SN", phoneNum: "+221", krName: "세네갈", enName: "SENEGAL" },
  { code: "SO", phoneNum: "+252", krName: "소말리아", enName: "SOMALIA" },
  { code: "SR", phoneNum: "+597", krName: "수리남", enName: "SURINAME" },
  { code: "SS", phoneNum: "+211", krName: "남수단", enName: "SOUTH SUDAN" },
  {
    code: "ST",
    phoneNum: "+239",
    krName: "쌍투메 프린시페",
    enName: "SAO TOME AND PRINCIPE",
  },
  { code: "SV", phoneNum: "+503", krName: "엘살바도르", enName: "EL SALVADOR" },
  {
    code: "SX",
    phoneNum: "+1-721",
    krName: "신트마르텐",
    enName: "SINT MAARTEN (DUTCH PART)",
  },
  {
    code: "SY",
    phoneNum: "+963",
    krName: "시리아",
    enName: "SYRIAN ARAB REPUBLIC",
  },
  { code: "SZ", phoneNum: "+268", krName: "스와질랜드", enName: "SWAZILAND" },
  {
    code: "TC",
    phoneNum: "+1-649",
    krName: "터크스 카이코스 제도",
    enName: "TURKS AND CAICOS ISLANDS",
  },
  { code: "TD", phoneNum: "+235", krName: "차드", enName: "CHAD" },
  {
    code: "TF",
    phoneNum: "",
    krName: "프랑스 남부지역",
    enName: "FRENCH SOUTHERN TERRITORIES",
  },
  { code: "TG", phoneNum: "+228", krName: "토고", enName: "TOGO" },
  { code: "TH", phoneNum: "+66", krName: "태국", enName: "THAILAND" },
  { code: "TJ", phoneNum: "+992", krName: "타지키스탄", enName: "TAJIKISTAN" },
  { code: "TK", phoneNum: "+690", krName: "토켈라우", enName: "TOKELAU" },
  { code: "TL", phoneNum: "+670", krName: "동티모르", enName: "EAST TIMOR" },
  {
    code: "TM",
    phoneNum: "+993",
    krName: "투르크메니스탄",
    enName: "TURKMENISTAN",
  },
  { code: "TN", phoneNum: "+216", krName: "튀니지", enName: "TUNISIA" },
  { code: "TO", phoneNum: "+676", krName: "통가", enName: "TONGA" },
  { code: "TR", phoneNum: "+90", krName: "터키", enName: "TURKEY" },
  {
    code: "TT",
    phoneNum: "+1-868",
    krName: "트리니다드토바고",
    enName: "TRINIDAD AND TOBAGO",
  },
  { code: "TV", phoneNum: "+688", krName: "투발루", enName: "TUVALU" },
  { code: "TW", phoneNum: "+886", krName: "대만", enName: "TAIWAN" },
  { code: "TZ", phoneNum: "+255", krName: "탄자니아", enName: "TANZANIA" },
  { code: "UA", phoneNum: "+380", krName: "우크라이나", enName: "UKRAINE" },
  { code: "UG", phoneNum: "+256", krName: "우간다", enName: "UGANDA" },
  {
    code: "UM",
    phoneNum: "",
    krName: "미국령 소군도",
    enName: "UNITED STATES MINOR OUTLYING ISLANDS",
  },
  { code: "US", phoneNum: "+1", krName: "미국", enName: "UNITED STATES" },
  { code: "UY", phoneNum: "+598", krName: "우루과이", enName: "URUGUAY" },
  {
    code: "UZ",
    phoneNum: "+998",
    krName: "우즈베키스탄",
    enName: "UZBEKISTAN",
  },
  {
    code: "VA",
    phoneNum: "+379",
    krName: "바티칸",
    enName: "VATICAN CITY STATE",
  },
  {
    code: "VC",
    phoneNum: "+1-784",
    krName: "세인트 빈센트 그레나딘스",
    enName: "SAINT VINCENT AND THE GRENADINES",
  },
  { code: "VE", phoneNum: "+58", krName: "베네수엘라", enName: "VENEZUELA" },
  {
    code: "VG",
    phoneNum: "+1-284",
    krName: "영국령 버진아일랜드",
    enName: "VIRGIN ISLANDS (BRITISH)",
  },
  {
    code: "VI",
    phoneNum: "+1-340",
    krName: "미국령 버진아일랜드",
    enName: "VIRGIN ISLANDS (U.S.)",
  },
  { code: "VN", phoneNum: "+84", krName: "베트남", enName: "VIETNAM" },
  { code: "VU", phoneNum: "+678", krName: "바누아투", enName: "VANUATU" },
  {
    code: "WF",
    phoneNum: "+681",
    krName: "월리스 후트나",
    enName: "WALLIS AND FUTUNA ISLANDS",
  },
  { code: "WS", phoneNum: "+685", krName: "사모아", enName: "SAMOA" },
  { code: "YE", phoneNum: "+967", krName: "예멘", enName: "YEMEN" },
  { code: "YT", phoneNum: "+262", krName: "마요트", enName: "MAYOTTE" },
  { code: "YU", phoneNum: "", krName: "유고슬라비아", enName: "YUGOSLAVIA" },
  {
    code: "ZA",
    phoneNum: "+27",
    krName: "남아프리카공화국",
    enName: "SOUTH AFRICA",
  },
  { code: "ZM", phoneNum: "+260", krName: "잠비아", enName: "ZAMBIA" },
  { code: "ZR", phoneNum: "", krName: "자이르", enName: "ZAIRE" },
  { code: "ZW", phoneNum: "+263", krName: "짐바브웨", enName: "ZIMBABWE" },
  { code: "ZZ", phoneNum: "", krName: "국적불명", enName: "UNKNOWN" },
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
      country.phoneNum.toUpperCase().includes(searchTerm) ||
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
      row.innerHTML = `<td>${country.code}</td><td>${country.phoneNum}</td><td>${country.krName}</td><td>${country.enName}</td>`;
      tableBody.appendChild(row);
    });
  } else {
    // 일치하는 데이터로 테이블 채우기
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan=4 style="text-align: center;">검색 조회 결과가 없습니다.</td>`;
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
      country.phoneNum.toUpperCase().includes(searchTerm) ||
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
