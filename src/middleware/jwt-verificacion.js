import { jwt } from "jsonwwebtokens";

export const jwtVerificacion = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    next();
  } catch (error) {
    return res.status(401).send({
      message: "auth failed"
    });
  }
};
