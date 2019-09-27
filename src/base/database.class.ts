import {Pool} from 'pg';
import {
    dbStringPostgreSQL
} from '../config/constants';

// This class contains the database connections and execute query method
class Database {

    private pool;

    public constructor () {

        this.pool = new Pool(dbStringPostgreSQL);
        this.executeQuery = this.executeQuery.bind(this);

    }

    /**
     * executeQuery - Execute the query and return the response for PostgreSQL database
     *
     * @param  {string} command        SQL query to be sent to the database
     * @param  {any} params = null    Optional parameters to be replaced in the query
     * @return {Promise}              Promise that resolve response is the query response
     */
    protected executeQuery (command: string, params = null): Promise<[]> {
        
        return new Promise((resolve,reject): void => {

            this.pool.connect().then((client): void => {

                client.query(command,params).then((res): void => {

                    client.release();
                    resolve(res.rows);

                })
                    .catch((error): void => {

                        client.release();
                        reject(error);

                    });
            
            })
                .catch((error): void => reject(error));

        });

    }

}

export default Database;
