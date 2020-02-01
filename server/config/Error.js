class Error {
    static notFound(){
        return (req, res)=>{

            res.status(404).send({message:'not found'});
        }

    }

    static ErrorHandler() {

        return (err, req, res)=>{
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.send({message:err.message});

        }
        // set locals, only providing error in development

    }

}

module.exports=Error;
