import React, { FC, useState } from 'react'
import { Button, Dialog, Form as FormUI, FormGroup } from '@shared/ui'
import { useFilterState, STATS_PERIODS, STATS_COUNTRIES, STATS_TYPES } from '@shared/logic'
import { Formik, Form } from 'formik'
import { Select } from '../select/select.component'

export const Filter: FC = () => {
  const [on, setOpen] = useState(false)
  const { state, set } = useFilterState()
  return (
    <>
      <Dialog header='Filter' visible={on} modal onHide={() => setOpen(false)}>
        <Formik
          initialValues={state}
          onSubmit={(values) => {
            setOpen(false)
            set(() => values)
          }}
        >
          {() => (
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
      <Button label='Filter' onClick={() => setOpen(true)} className='p-button-primary p-button-raised' />
    </>
  )
}
