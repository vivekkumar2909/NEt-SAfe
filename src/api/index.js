import { Links } from "../../Modals/Links.modals.js";




export default async function ApiResponse(req, res, next)  {
    console.log(req.body);
    if(req.method==="POST"){
        const newLink = await Links.create({
            url: req.body.url,
            title: req.body.title,
            SafeVote: req.body.SafeVote,
            UnSafeVote: req.body.UnSafeVote
        });
        newLink.save((err, data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        });

        res.status(200).json({
            message: "Link Added Successfully",
            newLink
        });
        next();
    }
}

