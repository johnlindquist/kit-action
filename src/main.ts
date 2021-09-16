/* eslint-disable no-undef */
import * as core from '@actions/core'
import minimist from 'minimist'
import '@johnlindquist/kit'

async function run(): Promise<void> {
  try {
    core.info(JSON.stringify(process.env))
    const {script} = minimist(process.argv.slice(2))

    core.info(`Run the ${script} script ...`) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    // core.debug(new Date().toTimeString())
    // core.debug(new Date().toTimeString())

    core.setOutput('script', script)
    await kit(script)
  } catch (error) {
    core.setFailed((error as Error).message)
  }
}

run()
