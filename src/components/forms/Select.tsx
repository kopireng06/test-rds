import Select, { StylesConfig, Props } from 'react-select'

type Option = { value: string | number; label: string }
type CustomStyle = StylesConfig<Option, false>

const customStyles: CustomStyle = {
  container: (baseStyles) => ({
    ...baseStyles,
    width: '100%'
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    border: `2px solid #E0E0E0`,
    boxShadow: 'none',
    borderRadius: '8px',
    padding: '0 8px',
    minHeight: '40px',

    '&:hover': {
      border: `2px solid #E0E0E0`,
      boxShadow: 'none'
    }
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: '#9E9E9E'
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    borderRadius: '8px',
    border: `1px solid #E0E0E0`
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    color: '#1D1F20',
    backgroundColor: 'none',
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    padding: '10px 16px',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'rgb(0,84,166)',
      color: 'rgb(256,256,256)'
    }
  })
}

function SelectInput(props: Props<Option, false>) {
  return <Select styles={customStyles} {...props} />
}

export default SelectInput
