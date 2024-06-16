class apifeature{
    constructor(query,strquery){
        (this.query=query),
        (this.strquery=strquery)
    }

    search(){
        let keyword = this.strquery.keyword
        ?{
            name:{
                $regex:this.strquery.keyword,
                $option:"i"
            },
        }:{};
        this.query.find({...keyword})
        return this
    }

    filter() {
        const querystrcopy = { ...this.strquery };
        const removefield = ["keyword", "limit", "page"];
        removefield.forEach((field) => delete querystrcopy[field]);
        let strquery = JSON.stringify(querystrcopy);
        strquery = strquery.replace(/\b(gt|gte|lt|lte)/g, (match) => `$${match}`);
        this.query.find(JSON.parse(strquery));
        return this;
      }

}

export default apifeature