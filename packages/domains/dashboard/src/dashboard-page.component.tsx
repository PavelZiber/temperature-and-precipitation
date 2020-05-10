import React from 'react'
import { Box, Button } from '@shared/ui'

const Page = () => {
  return (
    <div>
      <h1>Dashboard test</h1>
      <Box>
        <Button label='hello world' primary onClick={() => alert('hello, world')} />
      </Box>
    </div>
  )
}

export const DashboardPage = Page
