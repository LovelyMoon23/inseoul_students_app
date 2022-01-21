import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import '../../styles/styles.scss';

const uneditalbleInfo = [
  { id: '1', title: '이름' },
  { id: '2', title: '생년월일' },
];
const editableInfo = [
  { id: '1', title: '휴대폰 번호' },
  { id: '2', title: '이메일 주소' },
];

const guardianOption = [
  { id: '1', value: 'mother', title: '엄마' },
  { id: '2', value: 'father', title: '아빠' },
  { id: '3', value: 'grand mother', title: '할머니' },
  { id: '4', value: 'grand father', title: '할아버지' },
];

function ModifyProfile() {
  return (
    <div id="wrap">
      <div id="header">
        <PageHeader title="정보 수정" />
      </div>
      <div id="container">
        <div id="content">
          <p className="subtitle">내 정보</p>
          {uneditalbleInfo.map(name => (
            <label key={name.id} htmlFor="user_uneditable_input">
              {name.title}
              <input id="user_uneditable_input" disabled />
            </label>
          ))}
          {editableInfo.map(data => (
            <label key={data.id} htmlFor="user_editable_input">
              {data.title}
              <input
                id="user_editable_input"
                className="input_large"
                autoComplete="off"
              />
            </label>
          ))}
          <p className="subtitle">보호자 정보</p>
          <label htmlFor="guardian_select">
            보호자
            <select id="guardian_select" className="select_large">
              <option value="" disabled selected>
                보호자를 선택해주세요
              </option>
              {guardianOption.map(guardian => (
                <option key={guardian.id} value={guardian.value} id="test10">
                  {guardian.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            보호자 연락처
            <input
              id="guardian_mobile"
              className="input_large"
              placeholder="보호자 연락처를 입력하세요"
              autoComplete="off"
            />
          </label>
          <Button>수정 완료</Button>
        </div>
      </div>
    </div>
  );
}
export default ModifyProfile;
