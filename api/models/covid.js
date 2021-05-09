get_all_data = async() => {
    try{
        const sql_text = 'SELECT id,name,user_name,user_type,avatar FROM public.hackers';
        const res = await client.query(sql_text);
        client.release()
        return res.rows
            
    } catch (err){
            console.log(err)
        }
}

module.exports = {
    get_all_data:get_all_data,
}