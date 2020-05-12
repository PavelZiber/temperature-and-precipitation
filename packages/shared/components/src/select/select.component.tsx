import { Dropdown } from '@shared/ui'
import React, { FC, MouseEventHandler } from 'react'
import { Field, FieldProps } from 'formik'

export type Option = {
  label: string
  value: string
}

export type SelectProps = {
  name: string
  options: Option[]
  value?: Option
  onChange?: MouseEventHandler<HTMLDivElement>
}

export const Select: FC<SelectProps> = ({ options, name }) => (
  <Field name={name}>
    {({ field, form }: FieldProps) => (
      <Dropdown
        value={field.value}
        options={options}
        onChange={(e) => {
          form.setFieldValue(name, e.value)
          form.setTouched({ [name]: true })
        }}
      />
    )}
  </Field>
)
