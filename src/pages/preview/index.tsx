import InfoItem from '@/components/InfoItem';
import Module from '@/components/Module';

const Preview = () => {
  return (
    <div
      id="INTERVIEW_PREVIEW"
      className="border-solid border-red-700"
      style={{ width: '17.94rem', height: '21.23rem' }}
    >
      <h1 className="text-xs font-bold text-gray-800">前端开发-肖昌旭</h1>
      <Module title="个人信息">
        <InfoItem label={"手机"} value={"13576714015"}/>
        <InfoItem label={"邮箱"} value={"konggu0328@gmail.com"}/>
        <InfoItem label={"手机"} value={"13576714015"}/>
      </Module>

      <Module title="项目经历">
        <InfoItem label={"手机"} value={"13576714015"}/>
        <InfoItem label={"邮箱"} value={"13576714015"}/>
        <InfoItem label={"手机"} value={"13576714015"}/>
      </Module>
    </div>
  );
};

export default Preview;
