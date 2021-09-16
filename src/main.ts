import * as core from '@actions/core'
import minimist from 'minimist'

async function run(): Promise<void> {
  try {
    const {script} = minimist(process.argv.slice(2))

    core.info(`Run the ${script} script ...`) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    // core.debug(new Date().toTimeString())
    // core.debug(new Date().toTimeString())

    core.setOutput('script', script)
  } catch (error) {
    core.setFailed((error as Error).message)
  }
}

run()
