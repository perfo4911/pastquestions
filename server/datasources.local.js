var url = process.env.OPENSHIFT_MONGODB_DB_URL || "mongodb://localhost/pastquestions";

module.exports = {
  mongodb:{
       
    defaultForType: "mongodb",
    connector: "loopback-connector-mongodb",
    url:url
  
  }
};