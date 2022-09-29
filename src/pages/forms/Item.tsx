import { FC, useMemo } from 'react'

// 表单类型
export enum FORM_TYPE {
  INPUT_TEXT = 'INPUT_TEXT',
  INPUT_DATE = 'INPUT_DATE',
  INPUT_DATETIME = 'INPUT_DATETIME',
  TEXTAREA = 'TEXTAREA'
}

export interface IFormItem {
  formType: FORM_TYPE,
  label: string;
  colon?: boolean;
  formProps?: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
}


const FormItem: FC<IFormItem> = (props) => {
  const { label, formType, colon = true, formProps = {} } = props;

  const form = useMemo(() => {
    switch (formType) {
    case FORM_TYPE.INPUT_TEXT:
    default:
      return <input placeholder={`请输入${label}`} className="form-input" type="text" {...formProps}/>;
    case FORM_TYPE.INPUT_DATE:
      return <input placeholder={`请选择${label}`} className="form-input" type="date" {...formProps}/>;
    case FORM_TYPE.INPUT_DATETIME:
      return <input placeholder={`请选择${label}`} className="form-input" type="datetime-local" {...formProps}/>;
    case FORM_TYPE.TEXTAREA:
      return <textarea placeholder={`请输入${label}`} className="form-textarea" {...formProps}/>
    }
  }, [ formType, label ])

  return (
    <label className="mt-1">
      <span className="text-gray-900">{label}{colon ? ':' : ''}</span>
      {form}
    </label>
  )
}

export default FormItem
