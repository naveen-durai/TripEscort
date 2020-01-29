package Configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;

import com.mongodb.MongoClient;

public class MongoConfiguration extends AbstractMongoConfiguration {

	@Value("${spring.data.mongodb.host}")
	private String host;
	@Value("${spring.data.mongodb.database}")
	private String db;
	@Override
	public MongoClient mongoClient() {
		return new MongoClient(host);
	}

	@Override
	protected String getDatabaseName() {
		return db;
	}
    public GridFsTemplate girdFsTemlate() throws Exception
    {
    	return new GridFsTemplate(mongoDbFactory(), mappingMongoConverter());
    }
}
