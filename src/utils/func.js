// 숫자를 가격(천 단위마다 콤마)으로 표시
export const priceToString = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// set을 array로
export const setToArray = (set) => {
    const array = [];
    for (let x of set) {
        array.push(x);
    }
    return array;
};

// textarea 높이 자동 맞춤
export const autoTextAreaHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
};

// 파트너 태그를 한글로
export const partnerTagToKorean = (tag) => {
    let korean = '알맞은 태그를 입력해주세요';

    if (tag === 'PM') {
        korean = '서비스기획';
    } else if (tag === 'MKT') {
        korean = '마케팅';
    } else if (tag === 'DEV') {
        korean = '개발';
    } else if (tag === 'DTA') {
        korean = '데이터';
    } else if (tag === 'DG') {
        korean = '디자인';
    }
    
    return korean;
}