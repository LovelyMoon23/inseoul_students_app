import DaumPostCode from 'react-daum-postcode';
import { ReactComponent as ArrowDown } from '../../../assets/arrow_down_grey.svg';

function Address({ address, setAddress, isOpenPost, setIsOpenPost }) {
  const onCompletePost = data => {
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr +=
          extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }
    setAddress(fullAddr);
  };

  return (
    <label htmlFor="address" className="address_label">
      주소
      {address.length > 1 ? (
        <button
          id="searched_address"
          className="select_large"
          onClick={() => {
            setIsOpenPost(!isOpenPost);
          }}
        >
          {address}
        </button>
      ) : (
        <div className="searching_address_btn_wrap">
          <button
            id="searching_address"
            className="select_large"
            onClick={() => {
              setIsOpenPost(!isOpenPost);
            }}
          >
            건물, 지번 또는 도로명 검색
            <ArrowDown />
          </button>
        </div>
      )}
      {isOpenPost && <DaumPostCode onComplete={onCompletePost} />}
      <input
        type="text"
        name="birth"
        className="input_large"
        placeholder="상세 주소를 입력해 주세요."
        autoComplete="off"
      />
    </label>
  );
}
export default Address;
