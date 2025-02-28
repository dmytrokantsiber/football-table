export const sortA = (a, b) => {
  if (Number(a.count) < Number(b.count)) {
    return 1;
  }
  if (Number(a.count) > Number(b.count)) {
    return -1;
  }
  if (Number(a.count) === Number(b.count)) {
    if (Number(a.difference) < Number(b.difference)) {
      return 1;
    }
    if (Number(a.difference) > Number(b.difference)) {
      return -1;
    }
    if (Number(a.difference) === Number(b.difference)) {
      if (Number(a.scored) < Number(b.scored)) {
        return 1;
      }
      if (Number(a.scored) > Number(b.scored)) {
        return -1;
      }
      return 0;
    }
  }
  return 0;
};

export const sortB = (a, b) => {
  if (Number(a.difference) < Number(b.difference)) {
    return 1;
  }
  if (Number(a.difference) > Number(b.difference)) {
    return -1;
  }
  return 0;
};
export const sortC = (a, b) => {
  if (Number(a.scored) < Number(b.scored)) {
    return 1;
  }
  if (Number(a.scored) > Number(b.scored)) {
    return -1;
  }
  return 0;
};
