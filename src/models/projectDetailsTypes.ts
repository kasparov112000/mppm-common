export type ProjectDetail = {
    projectName: string,
    clientName: string
}

export type ProjectsDetail = {
    [wbsCode: string]: ProjectDetail
}