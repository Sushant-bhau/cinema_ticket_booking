import jwt from "jsonwebtoken";

// ✅ Verify JWT and attach user to request
export const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // decoded = { id, role }
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

// ✅ Restrict route access to admins only
export const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ msg: "Not authenticated" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Access denied: Admins only" });
  }

  next();
};

// ✅ Restrict route access to normal users only
export const userMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ msg: "Not authenticated" });
  }

  if (req.user.role !== "user") {
    return res.status(403).json({ msg: "Access denied: Users only" });
  }

  next();
};