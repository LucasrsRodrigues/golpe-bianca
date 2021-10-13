function getPathRoute(path: string){
  const pathExploded = path.split('/');
  const pathNotNull = pathExploded.filter(function (i) {
    return i;
  });

  return pathNotNull[0];
}

export {
  getPathRoute
}