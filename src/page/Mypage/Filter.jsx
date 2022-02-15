import { useState } from 'react';

import '../../styles/pages/Mypage/Filter.scss';
function Filter() {
  const [실험, set실험] = useState('');
  // const [최종값, set최종값] = useState([{}]);
  const [이름, set이름] = useState([
    {
      id: 1,
      name: '이준식',
    },
    { id: 2, name: '김사랑' },
    { id: 3, name: '한상웅' },
    { id: 4, name: '홍길동' },
    { id: 5, name: '김길순' },
    { id: 6, name: '하동훈' },
    { id: 7, name: '유재석' },
    { id: 8, name: '박미나' },
    { id: 9, name: '조희선' },
    { id: 10, name: '김태희' },
    { id: 11, name: '송혜교' },
  ]);

  const filterTest = e => {
    const { value } = e.target;
    set실험(value);
  };
  const filter실험 = 이름.filter(data => {
    return data.name.includes(실험);
  });

  const noData = () => {
    if (filterTest.length > 1) {
      if ((filter실험 = [''])) {
        return <>메롱</>;
      }
      return null;
    }
  };
  return (
    <div id="wrap" className="filter_wrap">
      <h1>filter 기능 연습</h1>
      검색 :{' '}
      <input
        placeholder=" 학생이름을 검색해 주세요 !"
        onChange={e => {
          filterTest(e);
        }}
      />
      <div className="students_list_wrap">
        <h2>* 학생 명단 *</h2>
        <div className="students_list">
          <div>
            {filter실험.map(data => {
              return <div>{data.name} </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
