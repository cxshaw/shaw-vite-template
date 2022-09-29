import FormItem, { FORM_TYPE } from '@/pages/forms/Item'

const Forms = () => {
  return (
    <div id="INTERVIEW_FORMS" className="flex flex-col">
      <FormItem formType={FORM_TYPE.INPUT_TEXT} label="姓名"/>
      <FormItem formType={FORM_TYPE.INPUT_TEXT} label="邮箱"/>
      <FormItem formType={FORM_TYPE.INPUT_DATE} label="日期"/>
      <FormItem formType={FORM_TYPE.TEXTAREA} label="内容"/>
    </div>
  )
}

export default Forms
