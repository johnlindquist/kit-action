import tar from "tar"

core.setOutput("result", Boolean(tar) ? "success" : "fail")
