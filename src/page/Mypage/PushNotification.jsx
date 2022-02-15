import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import PushMessage from '../../components/PushMessage';
import LateMsg from '../../components/LateMsg';

function PushNotification() {
  const [openMsg, setOpenMsg] = useState(false);
  const [isReasonCheck, setIsReasonCheck] = useState(false);
  const [test5, setTest5] = useState(false);
  return (
    <div id="wrap" className="noti_wrap">
      <header id="header">
        <PageHeader title="알림 내역" />
      </header>
      <div id="container" className="push_page_container">
        <div id="content">
          <PushMessage />
          {openMsg ? (
            <LateMsg
              openMsg={openMsg}
              setOpenMsg={setOpenMsg}
              isReasonCheck={isReasonCheck}
              setIsReasonCheck={setIsReasonCheck}
              test5={test5}
              setTest5={setTest5}
            />
          ) : (
            <PushMessage openMsg={openMsg} setOpenMsg={setOpenMsg} />
          )}
        </div>
      </div>
    </div>
  );
}

export default PushNotification;
