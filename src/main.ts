import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const script: string = core.getInput('script')
    core.info(`Run the ${script} script ...`) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    // core.debug(new Date().toTimeString())
    // core.debug(new Date().toTimeString())

    // core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed((error as Error).message)
  }
}

run()
