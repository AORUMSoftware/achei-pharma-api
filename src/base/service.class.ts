import Database from "./database.class";

class Service extends Database  {

    public constructor () {

        super();

    }

    /**
     * stringParse - Responsible of parsing the string when received from HTTP request
     *
     * @param  {string} value String passed to be parsed
     * @return {string} parsed string
     */
    protected stringParse (value): string {

        return value
            .toString()
            .trim()
            .replace(new RegExp("'",'g'), "");

    }

}

export default Service;
