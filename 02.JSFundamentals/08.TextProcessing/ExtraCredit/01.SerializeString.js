function serialize (object) {
    return JSON.stringify(
      object,
      (_, v) => v instanceof Date ? { __date__: +v } : v
    );
}