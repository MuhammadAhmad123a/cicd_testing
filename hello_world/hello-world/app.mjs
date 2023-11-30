import log4js from "log4js";

export const lambdaHandler = async (event, context) => {
    try {
        const response = "Hello World!";
        logger.info(`${response}`);
        return response;
    } catch (err) {
        logger.error(`${err}`);
        return err;
    }
};
