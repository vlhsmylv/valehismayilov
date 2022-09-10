import works from "../../../data/works.json";

const handler = async (req: any, res:any) => {
    res.status(200).json({
        status: true,
        data: works
    })
}

export default handler;