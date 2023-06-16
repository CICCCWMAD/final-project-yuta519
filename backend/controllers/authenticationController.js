import { User } from '../models/users.js';
import { comparePassword, createJwt, hashPassword,  } from '../helpers/userHelper.js';

// curl -X POST -H "Content-Type: application/json" -d '{"name":"sensuikan1973", "email":"100", "password": "dkslfjalfjaa"}' localhost:4000/api/auth/register
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.send('register');
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const error = 'User ID or Password are invalid.';
  if (!user) {
    res.send(error);
    return
  }
  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) {
    res.status(401)
    res.json({ status: '401', message: 'Failed', isLogin: false});
    return
  }
  const jwt = createJwt({id: user._id, name: user.name,  email: user.email})
  res.status(201)
  res.json(
    {
      status: '201',
      message: 'Success',
      isLogin: true,
      jwt,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
};

export const updateMe = async (req, res) => {
  const { _id, name, email, password } = req.body;
  const hashedPassword = await hashPassword(password);

  await User.findOneAndUpdate(
    { _id }, { name, email, password: hashedPassword }, { upsert: true }
  );
  res.send('Updated succeed')
};

export const isCorrectToken = () => {
  const bearToken = req.headers["authorization"];
  const bearer = bearToken.split(" ");
  const token = bearer[1];

  jwt.verify(token, "secret", (error, user) => {
    if (error) {
      return res.sendStatus(403);
    } else {
      return res.json({
        user,
      });
    }
  })
};
