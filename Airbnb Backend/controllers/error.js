exports.error404 = (req, res) => {
    console.log("404 malware", req.url, req.method);
    res.status(404).render('404')
}