import React, { FC } from 'react'
import { Button, Dialog, Form as FormUI, FormGroup } from '@shared/ui'
import { useFilterState, STATS_PERIODS, STATS_COUNTRIES, STATS_TYPES } from '@shared/logic'
import { useToggle } from 'react-hooks-lib'
import { Formik, Form, FormikProps } from 'formik';
import { Select } from '../select/select.component'



export const Filter: FC = () => {
  const { on, toggle, reset } = useToggle(false)
  const { state, set } = useFilterState()
  return (
    <>
      <Dialog header='Filter' visible={on} modal onHide={reset}>
        <Formik
          initialValues={state}
          onSubmit={(values) => {
            set(() => values)
            reset()
          }}
        >
          {(props: FormikProps<Filter>) => (
            <Form className='filter-form'>
              <FormUI>
                <FormGroup>
                  <label htmlFor='country'>Country</label>
                  <Select name='country' options={STATS_COUNTRIES} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='period'>Period</label>
                  <Select name='period' options={STATS_PERIODS} />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='type'>Type</label>
                  <Select name='type' options={STATS_TYPES} />
                </FormGroup>
                <FormGroup>
                  <Button label='Submit' type='submit' className='p-button-primary p-button-raised' />
                </FormGroup>
              </FormUI>
            </Form>
          )}
        </Formik>
      </Dialog>
      <Button label='Filter' onClick={toggle} className='p-button-primary p-button-raised' />
    </>
  )
}
