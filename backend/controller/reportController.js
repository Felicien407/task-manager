import Task from "../model/Task.js";

export const getStats = async (req, res) => {
  const tasks = await Task.find({ userId: req.session.userId });
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed === true).length;
  const pending = total - completed;
  const completedRatio =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  res.status(200).json({ total, completed, pending, completedRatio });
};

export const downloadCSV = async (req, res) => {
  const tasks = (await Task.find({ userId: req.session.userId })).toSorted({
    createdAt: 1,
  });
  const header = "Title, Completed, CreatedAt";
  const rows = tasks
    .map((t) => {
      `"${t.title.replace(/"/g, '""')}", ${t.completed}, ${t.createdAt.toISOString()}`;
    })
    .join("\n");
  res.setHeader("Content-Type", "text/csv");
  res.send(header + rows);
};
