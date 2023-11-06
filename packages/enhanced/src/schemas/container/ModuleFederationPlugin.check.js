/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const t = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
(module.exports = D), (module.exports.default = D);
const e = {
    definitions: {
      AmdContainer: { type: 'string', minLength: 1 },
      AuxiliaryComment: {
        anyOf: [
          { type: 'string' },
          { $ref: '#/definitions/LibraryCustomUmdCommentObject' },
        ],
      },
      EntryRuntime: {
        anyOf: [{ enum: [!1] }, { type: 'string', minLength: 1 }],
      },
      Exposes: {
        anyOf: [
          {
            type: 'array',
            items: {
              anyOf: [
                { $ref: '#/definitions/ExposesItem' },
                { $ref: '#/definitions/ExposesObject' },
              ],
            },
          },
          { $ref: '#/definitions/ExposesObject' },
        ],
      },
      ExposesConfig: {
        type: 'object',
        additionalProperties: !1,
        properties: {
          import: {
            anyOf: [
              { $ref: '#/definitions/ExposesItem' },
              { $ref: '#/definitions/ExposesItems' },
            ],
          },
          name: { type: 'string' },
        },
        required: ['import'],
      },
      ExposesItem: { type: 'string', minLength: 1 },
      ExposesItems: {
        type: 'array',
        items: { $ref: '#/definitions/ExposesItem' },
      },
      ExposesObject: {
        type: 'object',
        additionalProperties: {
          anyOf: [
            { $ref: '#/definitions/ExposesConfig' },
            { $ref: '#/definitions/ExposesItem' },
            { $ref: '#/definitions/ExposesItems' },
          ],
        },
      },
      ExternalsType: {
        enum: [
          'var',
          'module',
          'assign',
          'this',
          'window',
          'self',
          'global',
          'commonjs',
          'commonjs2',
          'commonjs-module',
          'commonjs-static',
          'amd',
          'amd-require',
          'umd',
          'umd2',
          'jsonp',
          'system',
          'promise',
          'import',
          'script',
          'node-commonjs',
        ],
      },
      LibraryCustomUmdCommentObject: {
        type: 'object',
        additionalProperties: !1,
        properties: {
          amd: { type: 'string' },
          commonjs: { type: 'string' },
          commonjs2: { type: 'string' },
          root: { type: 'string' },
        },
      },
      LibraryCustomUmdObject: {
        type: 'object',
        additionalProperties: !1,
        properties: {
          amd: { type: 'string', minLength: 1 },
          commonjs: { type: 'string', minLength: 1 },
          root: {
            anyOf: [
              { type: 'array', items: { type: 'string', minLength: 1 } },
              { type: 'string', minLength: 1 },
            ],
          },
        },
      },
      LibraryExport: {
        anyOf: [
          { type: 'array', items: { type: 'string', minLength: 1 } },
          { type: 'string', minLength: 1 },
        ],
      },
      LibraryName: {
        anyOf: [
          {
            type: 'array',
            items: { type: 'string', minLength: 1 },
            minItems: 1,
          },
          { type: 'string', minLength: 1 },
          { $ref: '#/definitions/LibraryCustomUmdObject' },
        ],
      },
      LibraryOptions: {
        type: 'object',
        additionalProperties: !1,
        properties: {
          amdContainer: { $ref: '#/definitions/AmdContainer' },
          auxiliaryComment: { $ref: '#/definitions/AuxiliaryComment' },
          export: { $ref: '#/definitions/LibraryExport' },
          name: { $ref: '#/definitions/LibraryName' },
          type: { $ref: '#/definitions/LibraryType' },
          umdNamedDefine: { $ref: '#/definitions/UmdNamedDefine' },
        },
        required: ['type'],
      },
      LibraryType: {
        anyOf: [
          {
            enum: [
              'var',
              'module',
              'assign',
              'assign-properties',
              'this',
              'window',
              'self',
              'global',
              'commonjs',
              'commonjs2',
              'commonjs-module',
              'commonjs-static',
              'amd',
              'amd-require',
              'umd',
              'umd2',
              'jsonp',
              'system',
            ],
          },
          { type: 'string' },
        ],
      },
      Remotes: {
        anyOf: [
          {
            type: 'array',
            items: {
              anyOf: [
                { $ref: '#/definitions/RemotesItem' },
                { $ref: '#/definitions/RemotesObject' },
              ],
            },
          },
          { $ref: '#/definitions/RemotesObject' },
        ],
      },
      RemotesConfig: {
        type: 'object',
        additionalProperties: !1,
        properties: {
          external: {
            anyOf: [
              { $ref: '#/definitions/RemotesItem' },
              { $ref: '#/definitions/RemotesItems' },
            ],
          },
          shareScope: { type: 'string', minLength: 1 },
        },
        required: ['external'],
      },
      RemotesItem: { type: 'string', minLength: 1 },
      RemotesItems: {
        type: 'array',
        items: { $ref: '#/definitions/RemotesItem' },
      },
      RemotesObject: {
        type: 'object',
        additionalProperties: {
          anyOf: [
            { $ref: '#/definitions/RemotesConfig' },
            { $ref: '#/definitions/RemotesItem' },
            { $ref: '#/definitions/RemotesItems' },
          ],
        },
      },
      Shared: {
        anyOf: [
          {
            type: 'array',
            items: {
              anyOf: [
                { $ref: '#/definitions/SharedItem' },
                { $ref: '#/definitions/SharedObject' },
              ],
            },
          },
          { $ref: '#/definitions/SharedObject' },
        ],
      },
      SharedConfig: {
        type: 'object',
        additionalProperties: !1,
        properties: {
          eager: { type: 'boolean' },
          import: {
            anyOf: [{ enum: [!1] }, { $ref: '#/definitions/SharedItem' }],
          },
          packageName: { type: 'string', minLength: 1 },
          requiredVersion: { anyOf: [{ enum: [!1] }, { type: 'string' }] },
          shareKey: { type: 'string', minLength: 1 },
          shareScope: { type: 'string', minLength: 1 },
          singleton: { type: 'boolean' },
          strictVersion: { type: 'boolean' },
          version: { anyOf: [{ enum: [!1] }, { type: 'string' }] },
        },
      },
      SharedItem: { type: 'string', minLength: 1 },
      SharedObject: {
        type: 'object',
        additionalProperties: {
          anyOf: [
            { $ref: '#/definitions/SharedConfig' },
            { $ref: '#/definitions/SharedItem' },
          ],
        },
      },
      UmdNamedDefine: { type: 'boolean' },
    },
    type: 'object',
    additionalProperties: !1,
    properties: {
      exposes: { $ref: '#/definitions/Exposes' },
      filename: { type: 'string', absolutePath: !1 },
      library: { $ref: '#/definitions/LibraryOptions' },
      name: { type: 'string' },
      remoteType: { oneOf: [{ $ref: '#/definitions/ExternalsType' }] },
      remotes: { $ref: '#/definitions/Remotes' },
      runtime: { $ref: '#/definitions/EntryRuntime' },
      shareScope: { type: 'string', minLength: 1 },
      shared: { $ref: '#/definitions/Shared' },
    },
  },
  r = Object.prototype.hasOwnProperty;
function n(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: s,
    rootData: a = t,
  } = {},
) {
  if (!Array.isArray(t))
    return (n.errors = [{ params: { type: 'array' } }]), !1;
  {
    const e = t.length;
    for (let r = 0; r < e; r++) {
      let e = t[r];
      const s = 0;
      if ('string' != typeof e)
        return (n.errors = [{ params: { type: 'string' } }]), !1;
      if (e.length < 1) return (n.errors = [{ params: {} }]), !1;
      if (0 !== s) break;
    }
  }
  return (n.errors = null), !0;
}
function s(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: a,
    rootData: o = t,
  } = {},
) {
  let i = null,
    l = 0;
  if (0 === l) {
    if (!t || 'object' != typeof t || Array.isArray(t))
      return (s.errors = [{ params: { type: 'object' } }]), !1;
    {
      let r;
      if (void 0 === t.import && (r = 'import'))
        return (s.errors = [{ params: { missingProperty: r } }]), !1;
      {
        const r = l;
        for (const e in t)
          if ('import' !== e && 'name' !== e)
            return (s.errors = [{ params: { additionalProperty: e } }]), !1;
        if (r === l) {
          if (void 0 !== t.import) {
            let r = t.import;
            const a = l,
              c = l;
            let m = !1;
            const u = l;
            if (l == l)
              if ('string' == typeof r) {
                if (r.length < 1) {
                  const t = { params: {} };
                  null === i ? (i = [t]) : i.push(t), l++;
                }
              } else {
                const t = { params: { type: 'string' } };
                null === i ? (i = [t]) : i.push(t), l++;
              }
            var p = u === l;
            if (((m = m || p), !m)) {
              const s = l;
              n(r, {
                instancePath: e + '/import',
                parentData: t,
                parentDataProperty: 'import',
                rootData: o,
              }) ||
                ((i = null === i ? n.errors : i.concat(n.errors)),
                (l = i.length)),
                (p = s === l),
                (m = m || p);
            }
            if (!m) {
              const t = { params: {} };
              return (
                null === i ? (i = [t]) : i.push(t), l++, (s.errors = i), !1
              );
            }
            (l = c), null !== i && (c ? (i.length = c) : (i = null));
            var f = a === l;
          } else f = !0;
          if (f)
            if (void 0 !== t.name) {
              const e = l;
              if ('string' != typeof t.name)
                return (s.errors = [{ params: { type: 'string' } }]), !1;
              f = e === l;
            } else f = !0;
        }
      }
    }
  }
  return (s.errors = i), 0 === l;
}
function a(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: o,
    rootData: i = t,
  } = {},
) {
  let l = null,
    p = 0;
  if (0 === p) {
    if (!t || 'object' != typeof t || Array.isArray(t))
      return (a.errors = [{ params: { type: 'object' } }]), !1;
    for (const r in t) {
      let o = t[r];
      const c = p,
        m = p;
      let u = !1;
      const y = p;
      s(o, {
        instancePath: e + '/' + r.replace(/~/g, '~0').replace(/\//g, '~1'),
        parentData: t,
        parentDataProperty: r,
        rootData: i,
      }) || ((l = null === l ? s.errors : l.concat(s.errors)), (p = l.length));
      var f = y === p;
      if (((u = u || f), !u)) {
        const s = p;
        if (p == p)
          if ('string' == typeof o) {
            if (o.length < 1) {
              const t = { params: {} };
              null === l ? (l = [t]) : l.push(t), p++;
            }
          } else {
            const t = { params: { type: 'string' } };
            null === l ? (l = [t]) : l.push(t), p++;
          }
        if (((f = s === p), (u = u || f), !u)) {
          const s = p;
          n(o, {
            instancePath: e + '/' + r.replace(/~/g, '~0').replace(/\//g, '~1'),
            parentData: t,
            parentDataProperty: r,
            rootData: i,
          }) ||
            ((l = null === l ? n.errors : l.concat(n.errors)), (p = l.length)),
            (f = s === p),
            (u = u || f);
        }
      }
      if (!u) {
        const t = { params: {} };
        return null === l ? (l = [t]) : l.push(t), p++, (a.errors = l), !1;
      }
      if (((p = m), null !== l && (m ? (l.length = m) : (l = null)), c !== p))
        break;
    }
  }
  return (a.errors = l), 0 === p;
}
function o(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: n,
    rootData: s = t,
  } = {},
) {
  let i = null,
    l = 0;
  const p = l;
  let f = !1;
  const c = l;
  if (l === c)
    if (Array.isArray(t)) {
      const r = t.length;
      for (let n = 0; n < r; n++) {
        let r = t[n];
        const o = l,
          p = l;
        let f = !1;
        const c = l;
        if (l == l)
          if ('string' == typeof r) {
            if (r.length < 1) {
              const t = { params: {} };
              null === i ? (i = [t]) : i.push(t), l++;
            }
          } else {
            const t = { params: { type: 'string' } };
            null === i ? (i = [t]) : i.push(t), l++;
          }
        var m = c === l;
        if (((f = f || m), !f)) {
          const o = l;
          a(r, {
            instancePath: e + '/' + n,
            parentData: t,
            parentDataProperty: n,
            rootData: s,
          }) ||
            ((i = null === i ? a.errors : i.concat(a.errors)), (l = i.length)),
            (m = o === l),
            (f = f || m);
        }
        if (f) (l = p), null !== i && (p ? (i.length = p) : (i = null));
        else {
          const t = { params: {} };
          null === i ? (i = [t]) : i.push(t), l++;
        }
        if (o !== l) break;
      }
    } else {
      const t = { params: { type: 'array' } };
      null === i ? (i = [t]) : i.push(t), l++;
    }
  var u = c === l;
  if (((f = f || u), !f)) {
    const o = l;
    a(t, {
      instancePath: e,
      parentData: r,
      parentDataProperty: n,
      rootData: s,
    }) || ((i = null === i ? a.errors : i.concat(a.errors)), (l = i.length)),
      (u = o === l),
      (f = f || u);
  }
  if (!f) {
    const t = { params: {} };
    return null === i ? (i = [t]) : i.push(t), l++, (o.errors = i), !1;
  }
  return (
    (l = p),
    null !== i && (p ? (i.length = p) : (i = null)),
    (o.errors = i),
    0 === l
  );
}
function i(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: n,
    rootData: s = t,
  } = {},
) {
  let a = null,
    o = 0;
  const l = o;
  let p = !1;
  const f = o;
  if ('string' != typeof t) {
    const t = { params: { type: 'string' } };
    null === a ? (a = [t]) : a.push(t), o++;
  }
  var c = f === o;
  if (((p = p || c), !p)) {
    const e = o;
    if (o == o)
      if (t && 'object' == typeof t && !Array.isArray(t)) {
        const e = o;
        for (const e in t)
          if (
            'amd' !== e &&
            'commonjs' !== e &&
            'commonjs2' !== e &&
            'root' !== e
          ) {
            const t = { params: { additionalProperty: e } };
            null === a ? (a = [t]) : a.push(t), o++;
            break;
          }
        if (e === o) {
          if (void 0 !== t.amd) {
            const e = o;
            if ('string' != typeof t.amd) {
              const t = { params: { type: 'string' } };
              null === a ? (a = [t]) : a.push(t), o++;
            }
            var m = e === o;
          } else m = !0;
          if (m) {
            if (void 0 !== t.commonjs) {
              const e = o;
              if ('string' != typeof t.commonjs) {
                const t = { params: { type: 'string' } };
                null === a ? (a = [t]) : a.push(t), o++;
              }
              m = e === o;
            } else m = !0;
            if (m) {
              if (void 0 !== t.commonjs2) {
                const e = o;
                if ('string' != typeof t.commonjs2) {
                  const t = { params: { type: 'string' } };
                  null === a ? (a = [t]) : a.push(t), o++;
                }
                m = e === o;
              } else m = !0;
              if (m)
                if (void 0 !== t.root) {
                  const e = o;
                  if ('string' != typeof t.root) {
                    const t = { params: { type: 'string' } };
                    null === a ? (a = [t]) : a.push(t), o++;
                  }
                  m = e === o;
                } else m = !0;
            }
          }
        }
      } else {
        const t = { params: { type: 'object' } };
        null === a ? (a = [t]) : a.push(t), o++;
      }
    (c = e === o), (p = p || c);
  }
  if (!p) {
    const t = { params: {} };
    return null === a ? (a = [t]) : a.push(t), o++, (i.errors = a), !1;
  }
  return (
    (o = l),
    null !== a && (l ? (a.length = l) : (a = null)),
    (i.errors = a),
    0 === o
  );
}
function l(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: n,
    rootData: s = t,
  } = {},
) {
  let a = null,
    o = 0;
  const i = o;
  let p = !1;
  const f = o;
  if (o === f)
    if (Array.isArray(t))
      if (t.length < 1) {
        const t = { params: { limit: 1 } };
        null === a ? (a = [t]) : a.push(t), o++;
      } else {
        const e = t.length;
        for (let r = 0; r < e; r++) {
          let e = t[r];
          const n = o;
          if (o === n)
            if ('string' == typeof e) {
              if (e.length < 1) {
                const t = { params: {} };
                null === a ? (a = [t]) : a.push(t), o++;
              }
            } else {
              const t = { params: { type: 'string' } };
              null === a ? (a = [t]) : a.push(t), o++;
            }
          if (n !== o) break;
        }
      }
    else {
      const t = { params: { type: 'array' } };
      null === a ? (a = [t]) : a.push(t), o++;
    }
  var c = f === o;
  if (((p = p || c), !p)) {
    const e = o;
    if (o === e)
      if ('string' == typeof t) {
        if (t.length < 1) {
          const t = { params: {} };
          null === a ? (a = [t]) : a.push(t), o++;
        }
      } else {
        const t = { params: { type: 'string' } };
        null === a ? (a = [t]) : a.push(t), o++;
      }
    if (((c = e === o), (p = p || c), !p)) {
      const e = o;
      if (o == o)
        if (t && 'object' == typeof t && !Array.isArray(t)) {
          const e = o;
          for (const e in t)
            if ('amd' !== e && 'commonjs' !== e && 'root' !== e) {
              const t = { params: { additionalProperty: e } };
              null === a ? (a = [t]) : a.push(t), o++;
              break;
            }
          if (e === o) {
            if (void 0 !== t.amd) {
              let e = t.amd;
              const r = o;
              if (o === r)
                if ('string' == typeof e) {
                  if (e.length < 1) {
                    const t = { params: {} };
                    null === a ? (a = [t]) : a.push(t), o++;
                  }
                } else {
                  const t = { params: { type: 'string' } };
                  null === a ? (a = [t]) : a.push(t), o++;
                }
              var m = r === o;
            } else m = !0;
            if (m) {
              if (void 0 !== t.commonjs) {
                let e = t.commonjs;
                const r = o;
                if (o === r)
                  if ('string' == typeof e) {
                    if (e.length < 1) {
                      const t = { params: {} };
                      null === a ? (a = [t]) : a.push(t), o++;
                    }
                  } else {
                    const t = { params: { type: 'string' } };
                    null === a ? (a = [t]) : a.push(t), o++;
                  }
                m = r === o;
              } else m = !0;
              if (m)
                if (void 0 !== t.root) {
                  let e = t.root;
                  const r = o,
                    n = o;
                  let s = !1;
                  const i = o;
                  if (o === i)
                    if (Array.isArray(e)) {
                      const t = e.length;
                      for (let r = 0; r < t; r++) {
                        let t = e[r];
                        const n = o;
                        if (o === n)
                          if ('string' == typeof t) {
                            if (t.length < 1) {
                              const t = { params: {} };
                              null === a ? (a = [t]) : a.push(t), o++;
                            }
                          } else {
                            const t = { params: { type: 'string' } };
                            null === a ? (a = [t]) : a.push(t), o++;
                          }
                        if (n !== o) break;
                      }
                    } else {
                      const t = { params: { type: 'array' } };
                      null === a ? (a = [t]) : a.push(t), o++;
                    }
                  var u = i === o;
                  if (((s = s || u), !s)) {
                    const t = o;
                    if (o === t)
                      if ('string' == typeof e) {
                        if (e.length < 1) {
                          const t = { params: {} };
                          null === a ? (a = [t]) : a.push(t), o++;
                        }
                      } else {
                        const t = { params: { type: 'string' } };
                        null === a ? (a = [t]) : a.push(t), o++;
                      }
                    (u = t === o), (s = s || u);
                  }
                  if (s)
                    (o = n), null !== a && (n ? (a.length = n) : (a = null));
                  else {
                    const t = { params: {} };
                    null === a ? (a = [t]) : a.push(t), o++;
                  }
                  m = r === o;
                } else m = !0;
            }
          }
        } else {
          const t = { params: { type: 'object' } };
          null === a ? (a = [t]) : a.push(t), o++;
        }
      (c = e === o), (p = p || c);
    }
  }
  if (!p) {
    const t = { params: {} };
    return null === a ? (a = [t]) : a.push(t), o++, (l.errors = a), !1;
  }
  return (
    (o = i),
    null !== a && (i ? (a.length = i) : (a = null)),
    (l.errors = a),
    0 === o
  );
}
function p(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: n,
    rootData: s = t,
  } = {},
) {
  let a = null,
    o = 0;
  if (0 === o) {
    if (!t || 'object' != typeof t || Array.isArray(t))
      return (p.errors = [{ params: { type: 'object' } }]), !1;
    {
      let r;
      if (void 0 === t.type && (r = 'type'))
        return (p.errors = [{ params: { missingProperty: r } }]), !1;
      {
        const r = o;
        for (const e in t)
          if (
            'amdContainer' !== e &&
            'auxiliaryComment' !== e &&
            'export' !== e &&
            'name' !== e &&
            'type' !== e &&
            'umdNamedDefine' !== e
          )
            return (p.errors = [{ params: { additionalProperty: e } }]), !1;
        if (r === o) {
          if (void 0 !== t.amdContainer) {
            let e = t.amdContainer;
            const r = o;
            if (o == o) {
              if ('string' != typeof e)
                return (p.errors = [{ params: { type: 'string' } }]), !1;
              if (e.length < 1) return (p.errors = [{ params: {} }]), !1;
            }
            var f = r === o;
          } else f = !0;
          if (f) {
            if (void 0 !== t.auxiliaryComment) {
              const r = o;
              i(t.auxiliaryComment, {
                instancePath: e + '/auxiliaryComment',
                parentData: t,
                parentDataProperty: 'auxiliaryComment',
                rootData: s,
              }) ||
                ((a = null === a ? i.errors : a.concat(i.errors)),
                (o = a.length)),
                (f = r === o);
            } else f = !0;
            if (f) {
              if (void 0 !== t.export) {
                let e = t.export;
                const r = o,
                  n = o;
                let s = !1;
                const i = o;
                if (o === i)
                  if (Array.isArray(e)) {
                    const t = e.length;
                    for (let r = 0; r < t; r++) {
                      let t = e[r];
                      const n = o;
                      if (o === n)
                        if ('string' == typeof t) {
                          if (t.length < 1) {
                            const t = { params: {} };
                            null === a ? (a = [t]) : a.push(t), o++;
                          }
                        } else {
                          const t = { params: { type: 'string' } };
                          null === a ? (a = [t]) : a.push(t), o++;
                        }
                      if (n !== o) break;
                    }
                  } else {
                    const t = { params: { type: 'array' } };
                    null === a ? (a = [t]) : a.push(t), o++;
                  }
                var c = i === o;
                if (((s = s || c), !s)) {
                  const t = o;
                  if (o === t)
                    if ('string' == typeof e) {
                      if (e.length < 1) {
                        const t = { params: {} };
                        null === a ? (a = [t]) : a.push(t), o++;
                      }
                    } else {
                      const t = { params: { type: 'string' } };
                      null === a ? (a = [t]) : a.push(t), o++;
                    }
                  (c = t === o), (s = s || c);
                }
                if (!s) {
                  const t = { params: {} };
                  return (
                    null === a ? (a = [t]) : a.push(t), o++, (p.errors = a), !1
                  );
                }
                (o = n),
                  null !== a && (n ? (a.length = n) : (a = null)),
                  (f = r === o);
              } else f = !0;
              if (f) {
                if (void 0 !== t.name) {
                  const r = o;
                  l(t.name, {
                    instancePath: e + '/name',
                    parentData: t,
                    parentDataProperty: 'name',
                    rootData: s,
                  }) ||
                    ((a = null === a ? l.errors : a.concat(l.errors)),
                    (o = a.length)),
                    (f = r === o);
                } else f = !0;
                if (f) {
                  if (void 0 !== t.type) {
                    let e = t.type;
                    const r = o,
                      n = o;
                    let s = !1;
                    const i = o;
                    if (
                      'var' !== e &&
                      'module' !== e &&
                      'assign' !== e &&
                      'assign-properties' !== e &&
                      'this' !== e &&
                      'window' !== e &&
                      'self' !== e &&
                      'global' !== e &&
                      'commonjs' !== e &&
                      'commonjs2' !== e &&
                      'commonjs-module' !== e &&
                      'commonjs-static' !== e &&
                      'amd' !== e &&
                      'amd-require' !== e &&
                      'umd' !== e &&
                      'umd2' !== e &&
                      'jsonp' !== e &&
                      'system' !== e
                    ) {
                      const t = { params: {} };
                      null === a ? (a = [t]) : a.push(t), o++;
                    }
                    var m = i === o;
                    if (((s = s || m), !s)) {
                      const t = o;
                      if ('string' != typeof e) {
                        const t = { params: { type: 'string' } };
                        null === a ? (a = [t]) : a.push(t), o++;
                      }
                      (m = t === o), (s = s || m);
                    }
                    if (!s) {
                      const t = { params: {} };
                      return (
                        null === a ? (a = [t]) : a.push(t),
                        o++,
                        (p.errors = a),
                        !1
                      );
                    }
                    (o = n),
                      null !== a && (n ? (a.length = n) : (a = null)),
                      (f = r === o);
                  } else f = !0;
                  if (f)
                    if (void 0 !== t.umdNamedDefine) {
                      const e = o;
                      if ('boolean' != typeof t.umdNamedDefine)
                        return (
                          (p.errors = [{ params: { type: 'boolean' } }]), !1
                        );
                      f = e === o;
                    } else f = !0;
                }
              }
            }
          }
        }
      }
    }
  }
  return (p.errors = a), 0 === o;
}
function f(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: n,
    rootData: s = t,
  } = {},
) {
  if (!Array.isArray(t))
    return (f.errors = [{ params: { type: 'array' } }]), !1;
  {
    const e = t.length;
    for (let r = 0; r < e; r++) {
      let e = t[r];
      const n = 0;
      if ('string' != typeof e)
        return (f.errors = [{ params: { type: 'string' } }]), !1;
      if (e.length < 1) return (f.errors = [{ params: {} }]), !1;
      if (0 !== n) break;
    }
  }
  return (f.errors = null), !0;
}
function c(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: n,
    rootData: s = t,
  } = {},
) {
  let a = null,
    o = 0;
  if (0 === o) {
    if (!t || 'object' != typeof t || Array.isArray(t))
      return (c.errors = [{ params: { type: 'object' } }]), !1;
    {
      let r;
      if (void 0 === t.external && (r = 'external'))
        return (c.errors = [{ params: { missingProperty: r } }]), !1;
      {
        const r = o;
        for (const e in t)
          if ('external' !== e && 'shareScope' !== e)
            return (c.errors = [{ params: { additionalProperty: e } }]), !1;
        if (r === o) {
          if (void 0 !== t.external) {
            let r = t.external;
            const n = o,
              p = o;
            let m = !1;
            const u = o;
            if (o == o)
              if ('string' == typeof r) {
                if (r.length < 1) {
                  const t = { params: {} };
                  null === a ? (a = [t]) : a.push(t), o++;
                }
              } else {
                const t = { params: { type: 'string' } };
                null === a ? (a = [t]) : a.push(t), o++;
              }
            var i = u === o;
            if (((m = m || i), !m)) {
              const n = o;
              f(r, {
                instancePath: e + '/external',
                parentData: t,
                parentDataProperty: 'external',
                rootData: s,
              }) ||
                ((a = null === a ? f.errors : a.concat(f.errors)),
                (o = a.length)),
                (i = n === o),
                (m = m || i);
            }
            if (!m) {
              const t = { params: {} };
              return (
                null === a ? (a = [t]) : a.push(t), o++, (c.errors = a), !1
              );
            }
            (o = p), null !== a && (p ? (a.length = p) : (a = null));
            var l = n === o;
          } else l = !0;
          if (l)
            if (void 0 !== t.shareScope) {
              let e = t.shareScope;
              const r = o;
              if (o === r) {
                if ('string' != typeof e)
                  return (c.errors = [{ params: { type: 'string' } }]), !1;
                if (e.length < 1) return (c.errors = [{ params: {} }]), !1;
              }
              l = r === o;
            } else l = !0;
        }
      }
    }
  }
  return (c.errors = a), 0 === o;
}
function m(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: n,
    rootData: s = t,
  } = {},
) {
  let a = null,
    o = 0;
  if (0 === o) {
    if (!t || 'object' != typeof t || Array.isArray(t))
      return (m.errors = [{ params: { type: 'object' } }]), !1;
    for (const r in t) {
      let n = t[r];
      const l = o,
        p = o;
      let u = !1;
      const y = o;
      c(n, {
        instancePath: e + '/' + r.replace(/~/g, '~0').replace(/\//g, '~1'),
        parentData: t,
        parentDataProperty: r,
        rootData: s,
      }) || ((a = null === a ? c.errors : a.concat(c.errors)), (o = a.length));
      var i = y === o;
      if (((u = u || i), !u)) {
        const l = o;
        if (o == o)
          if ('string' == typeof n) {
            if (n.length < 1) {
              const t = { params: {} };
              null === a ? (a = [t]) : a.push(t), o++;
            }
          } else {
            const t = { params: { type: 'string' } };
            null === a ? (a = [t]) : a.push(t), o++;
          }
        if (((i = l === o), (u = u || i), !u)) {
          const l = o;
          f(n, {
            instancePath: e + '/' + r.replace(/~/g, '~0').replace(/\//g, '~1'),
            parentData: t,
            parentDataProperty: r,
            rootData: s,
          }) ||
            ((a = null === a ? f.errors : a.concat(f.errors)), (o = a.length)),
            (i = l === o),
            (u = u || i);
        }
      }
      if (!u) {
        const t = { params: {} };
        return null === a ? (a = [t]) : a.push(t), o++, (m.errors = a), !1;
      }
      if (((o = p), null !== a && (p ? (a.length = p) : (a = null)), l !== o))
        break;
    }
  }
  return (m.errors = a), 0 === o;
}
function u(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: n,
    rootData: s = t,
  } = {},
) {
  let a = null,
    o = 0;
  const i = o;
  let l = !1;
  const p = o;
  if (o === p)
    if (Array.isArray(t)) {
      const r = t.length;
      for (let n = 0; n < r; n++) {
        let r = t[n];
        const i = o,
          l = o;
        let p = !1;
        const c = o;
        if (o == o)
          if ('string' == typeof r) {
            if (r.length < 1) {
              const t = { params: {} };
              null === a ? (a = [t]) : a.push(t), o++;
            }
          } else {
            const t = { params: { type: 'string' } };
            null === a ? (a = [t]) : a.push(t), o++;
          }
        var f = c === o;
        if (((p = p || f), !p)) {
          const i = o;
          m(r, {
            instancePath: e + '/' + n,
            parentData: t,
            parentDataProperty: n,
            rootData: s,
          }) ||
            ((a = null === a ? m.errors : a.concat(m.errors)), (o = a.length)),
            (f = i === o),
            (p = p || f);
        }
        if (p) (o = l), null !== a && (l ? (a.length = l) : (a = null));
        else {
          const t = { params: {} };
          null === a ? (a = [t]) : a.push(t), o++;
        }
        if (i !== o) break;
      }
    } else {
      const t = { params: { type: 'array' } };
      null === a ? (a = [t]) : a.push(t), o++;
    }
  var c = p === o;
  if (((l = l || c), !l)) {
    const i = o;
    m(t, {
      instancePath: e,
      parentData: r,
      parentDataProperty: n,
      rootData: s,
    }) || ((a = null === a ? m.errors : a.concat(m.errors)), (o = a.length)),
      (c = i === o),
      (l = l || c);
  }
  if (!l) {
    const t = { params: {} };
    return null === a ? (a = [t]) : a.push(t), o++, (u.errors = a), !1;
  }
  return (
    (o = i),
    null !== a && (i ? (a.length = i) : (a = null)),
    (u.errors = a),
    0 === o
  );
}
const y = {
  type: 'object',
  additionalProperties: !1,
  properties: {
    eager: { type: 'boolean' },
    import: { anyOf: [{ enum: [!1] }, { $ref: '#/definitions/SharedItem' }] },
    packageName: { type: 'string', minLength: 1 },
    requiredVersion: { anyOf: [{ enum: [!1] }, { type: 'string' }] },
    shareKey: { type: 'string', minLength: 1 },
    shareScope: { type: 'string', minLength: 1 },
    singleton: { type: 'boolean' },
    strictVersion: { type: 'boolean' },
    version: { anyOf: [{ enum: [!1] }, { type: 'string' }] },
  },
};
function h(
  t,
  {
    instancePath: e = '',
    parentData: n,
    parentDataProperty: s,
    rootData: a = t,
  } = {},
) {
  let o = null,
    i = 0;
  if (0 === i) {
    if (!t || 'object' != typeof t || Array.isArray(t))
      return (h.errors = [{ params: { type: 'object' } }]), !1;
    {
      const e = i;
      for (const e in t)
        if (!r.call(y.properties, e))
          return (h.errors = [{ params: { additionalProperty: e } }]), !1;
      if (e === i) {
        if (void 0 !== t.eager) {
          const e = i;
          if ('boolean' != typeof t.eager)
            return (h.errors = [{ params: { type: 'boolean' } }]), !1;
          var l = e === i;
        } else l = !0;
        if (l) {
          if (void 0 !== t.import) {
            let e = t.import;
            const r = i,
              n = i;
            let s = !1;
            const a = i;
            if (!1 !== e) {
              const t = { params: {} };
              null === o ? (o = [t]) : o.push(t), i++;
            }
            var p = a === i;
            if (((s = s || p), !s)) {
              const t = i;
              if (i == i)
                if ('string' == typeof e) {
                  if (e.length < 1) {
                    const t = { params: {} };
                    null === o ? (o = [t]) : o.push(t), i++;
                  }
                } else {
                  const t = { params: { type: 'string' } };
                  null === o ? (o = [t]) : o.push(t), i++;
                }
              (p = t === i), (s = s || p);
            }
            if (!s) {
              const t = { params: {} };
              return (
                null === o ? (o = [t]) : o.push(t), i++, (h.errors = o), !1
              );
            }
            (i = n),
              null !== o && (n ? (o.length = n) : (o = null)),
              (l = r === i);
          } else l = !0;
          if (l) {
            if (void 0 !== t.packageName) {
              let e = t.packageName;
              const r = i;
              if (i === r) {
                if ('string' != typeof e)
                  return (h.errors = [{ params: { type: 'string' } }]), !1;
                if (e.length < 1) return (h.errors = [{ params: {} }]), !1;
              }
              l = r === i;
            } else l = !0;
            if (l) {
              if (void 0 !== t.requiredVersion) {
                let e = t.requiredVersion;
                const r = i,
                  n = i;
                let s = !1;
                const a = i;
                if (!1 !== e) {
                  const t = { params: {} };
                  null === o ? (o = [t]) : o.push(t), i++;
                }
                var f = a === i;
                if (((s = s || f), !s)) {
                  const t = i;
                  if ('string' != typeof e) {
                    const t = { params: { type: 'string' } };
                    null === o ? (o = [t]) : o.push(t), i++;
                  }
                  (f = t === i), (s = s || f);
                }
                if (!s) {
                  const t = { params: {} };
                  return (
                    null === o ? (o = [t]) : o.push(t), i++, (h.errors = o), !1
                  );
                }
                (i = n),
                  null !== o && (n ? (o.length = n) : (o = null)),
                  (l = r === i);
              } else l = !0;
              if (l) {
                if (void 0 !== t.shareKey) {
                  let e = t.shareKey;
                  const r = i;
                  if (i === r) {
                    if ('string' != typeof e)
                      return (h.errors = [{ params: { type: 'string' } }]), !1;
                    if (e.length < 1) return (h.errors = [{ params: {} }]), !1;
                  }
                  l = r === i;
                } else l = !0;
                if (l) {
                  if (void 0 !== t.shareScope) {
                    let e = t.shareScope;
                    const r = i;
                    if (i === r) {
                      if ('string' != typeof e)
                        return (
                          (h.errors = [{ params: { type: 'string' } }]), !1
                        );
                      if (e.length < 1)
                        return (h.errors = [{ params: {} }]), !1;
                    }
                    l = r === i;
                  } else l = !0;
                  if (l) {
                    if (void 0 !== t.singleton) {
                      const e = i;
                      if ('boolean' != typeof t.singleton)
                        return (
                          (h.errors = [{ params: { type: 'boolean' } }]), !1
                        );
                      l = e === i;
                    } else l = !0;
                    if (l) {
                      if (void 0 !== t.strictVersion) {
                        const e = i;
                        if ('boolean' != typeof t.strictVersion)
                          return (
                            (h.errors = [{ params: { type: 'boolean' } }]), !1
                          );
                        l = e === i;
                      } else l = !0;
                      if (l)
                        if (void 0 !== t.version) {
                          let e = t.version;
                          const r = i,
                            n = i;
                          let s = !1;
                          const a = i;
                          if (!1 !== e) {
                            const t = { params: {} };
                            null === o ? (o = [t]) : o.push(t), i++;
                          }
                          var c = a === i;
                          if (((s = s || c), !s)) {
                            const t = i;
                            if ('string' != typeof e) {
                              const t = { params: { type: 'string' } };
                              null === o ? (o = [t]) : o.push(t), i++;
                            }
                            (c = t === i), (s = s || c);
                          }
                          if (!s) {
                            const t = { params: {} };
                            return (
                              null === o ? (o = [t]) : o.push(t),
                              i++,
                              (h.errors = o),
                              !1
                            );
                          }
                          (i = n),
                            null !== o && (n ? (o.length = n) : (o = null)),
                            (l = r === i);
                        } else l = !0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return (h.errors = o), 0 === i;
}
function g(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: n,
    rootData: s = t,
  } = {},
) {
  let a = null,
    o = 0;
  if (0 === o) {
    if (!t || 'object' != typeof t || Array.isArray(t))
      return (g.errors = [{ params: { type: 'object' } }]), !1;
    for (const r in t) {
      let n = t[r];
      const l = o,
        p = o;
      let f = !1;
      const c = o;
      h(n, {
        instancePath: e + '/' + r.replace(/~/g, '~0').replace(/\//g, '~1'),
        parentData: t,
        parentDataProperty: r,
        rootData: s,
      }) || ((a = null === a ? h.errors : a.concat(h.errors)), (o = a.length));
      var i = c === o;
      if (((f = f || i), !f)) {
        const t = o;
        if (o == o)
          if ('string' == typeof n) {
            if (n.length < 1) {
              const t = { params: {} };
              null === a ? (a = [t]) : a.push(t), o++;
            }
          } else {
            const t = { params: { type: 'string' } };
            null === a ? (a = [t]) : a.push(t), o++;
          }
        (i = t === o), (f = f || i);
      }
      if (!f) {
        const t = { params: {} };
        return null === a ? (a = [t]) : a.push(t), o++, (g.errors = a), !1;
      }
      if (((o = p), null !== a && (p ? (a.length = p) : (a = null)), l !== o))
        break;
    }
  }
  return (g.errors = a), 0 === o;
}
function d(
  t,
  {
    instancePath: e = '',
    parentData: r,
    parentDataProperty: n,
    rootData: s = t,
  } = {},
) {
  let a = null,
    o = 0;
  const i = o;
  let l = !1;
  const p = o;
  if (o === p)
    if (Array.isArray(t)) {
      const r = t.length;
      for (let n = 0; n < r; n++) {
        let r = t[n];
        const i = o,
          l = o;
        let p = !1;
        const c = o;
        if (o == o)
          if ('string' == typeof r) {
            if (r.length < 1) {
              const t = { params: {} };
              null === a ? (a = [t]) : a.push(t), o++;
            }
          } else {
            const t = { params: { type: 'string' } };
            null === a ? (a = [t]) : a.push(t), o++;
          }
        var f = c === o;
        if (((p = p || f), !p)) {
          const i = o;
          g(r, {
            instancePath: e + '/' + n,
            parentData: t,
            parentDataProperty: n,
            rootData: s,
          }) ||
            ((a = null === a ? g.errors : a.concat(g.errors)), (o = a.length)),
            (f = i === o),
            (p = p || f);
        }
        if (p) (o = l), null !== a && (l ? (a.length = l) : (a = null));
        else {
          const t = { params: {} };
          null === a ? (a = [t]) : a.push(t), o++;
        }
        if (i !== o) break;
      }
    } else {
      const t = { params: { type: 'array' } };
      null === a ? (a = [t]) : a.push(t), o++;
    }
  var c = p === o;
  if (((l = l || c), !l)) {
    const i = o;
    g(t, {
      instancePath: e,
      parentData: r,
      parentDataProperty: n,
      rootData: s,
    }) || ((a = null === a ? g.errors : a.concat(g.errors)), (o = a.length)),
      (c = i === o),
      (l = l || c);
  }
  if (!l) {
    const t = { params: {} };
    return null === a ? (a = [t]) : a.push(t), o++, (d.errors = a), !1;
  }
  return (
    (o = i),
    null !== a && (i ? (a.length = i) : (a = null)),
    (d.errors = a),
    0 === o
  );
}
function D(
  n,
  {
    instancePath: s = '',
    parentData: a,
    parentDataProperty: i,
    rootData: l = n,
  } = {},
) {
  let f = null,
    c = 0;
  if (0 === c) {
    if (!n || 'object' != typeof n || Array.isArray(n))
      return (D.errors = [{ params: { type: 'object' } }]), !1;
    {
      const a = c;
      for (const t in n)
        if (!r.call(e.properties, t))
          return (D.errors = [{ params: { additionalProperty: t } }]), !1;
      if (a === c) {
        if (void 0 !== n.exposes) {
          const t = c;
          o(n.exposes, {
            instancePath: s + '/exposes',
            parentData: n,
            parentDataProperty: 'exposes',
            rootData: l,
          }) ||
            ((f = null === f ? o.errors : f.concat(o.errors)), (c = f.length));
          var m = t === c;
        } else m = !0;
        if (m) {
          if (void 0 !== n.filename) {
            let e = n.filename;
            const r = c;
            if (c === r) {
              if ('string' != typeof e)
                return (D.errors = [{ params: { type: 'string' } }]), !1;
              if (e.includes('!') || !1 !== t.test(e))
                return (D.errors = [{ params: {} }]), !1;
            }
            m = r === c;
          } else m = !0;
          if (m) {
            if (void 0 !== n.library) {
              const t = c;
              p(n.library, {
                instancePath: s + '/library',
                parentData: n,
                parentDataProperty: 'library',
                rootData: l,
              }) ||
                ((f = null === f ? p.errors : f.concat(p.errors)),
                (c = f.length)),
                (m = t === c);
            } else m = !0;
            if (m) {
              if (void 0 !== n.name) {
                const t = c;
                if ('string' != typeof n.name)
                  return (D.errors = [{ params: { type: 'string' } }]), !1;
                m = t === c;
              } else m = !0;
              if (m) {
                if (void 0 !== n.remoteType) {
                  let t = n.remoteType;
                  const e = c,
                    r = c;
                  let s = !1,
                    a = null;
                  const o = c;
                  if (
                    'var' !== t &&
                    'module' !== t &&
                    'assign' !== t &&
                    'this' !== t &&
                    'window' !== t &&
                    'self' !== t &&
                    'global' !== t &&
                    'commonjs' !== t &&
                    'commonjs2' !== t &&
                    'commonjs-module' !== t &&
                    'commonjs-static' !== t &&
                    'amd' !== t &&
                    'amd-require' !== t &&
                    'umd' !== t &&
                    'umd2' !== t &&
                    'jsonp' !== t &&
                    'system' !== t &&
                    'promise' !== t &&
                    'import' !== t &&
                    'script' !== t &&
                    'node-commonjs' !== t
                  ) {
                    const t = { params: {} };
                    null === f ? (f = [t]) : f.push(t), c++;
                  }
                  if ((o === c && ((s = !0), (a = 0)), !s)) {
                    const t = { params: { passingSchemas: a } };
                    return (
                      null === f ? (f = [t]) : f.push(t),
                      c++,
                      (D.errors = f),
                      !1
                    );
                  }
                  (c = r),
                    null !== f && (r ? (f.length = r) : (f = null)),
                    (m = e === c);
                } else m = !0;
                if (m) {
                  if (void 0 !== n.remotes) {
                    const t = c;
                    u(n.remotes, {
                      instancePath: s + '/remotes',
                      parentData: n,
                      parentDataProperty: 'remotes',
                      rootData: l,
                    }) ||
                      ((f = null === f ? u.errors : f.concat(u.errors)),
                      (c = f.length)),
                      (m = t === c);
                  } else m = !0;
                  if (m) {
                    if (void 0 !== n.runtime) {
                      let t = n.runtime;
                      const e = c,
                        r = c;
                      let s = !1;
                      const a = c;
                      if (!1 !== t) {
                        const t = { params: {} };
                        null === f ? (f = [t]) : f.push(t), c++;
                      }
                      var y = a === c;
                      if (((s = s || y), !s)) {
                        const e = c;
                        if (c === e)
                          if ('string' == typeof t) {
                            if (t.length < 1) {
                              const t = { params: {} };
                              null === f ? (f = [t]) : f.push(t), c++;
                            }
                          } else {
                            const t = { params: { type: 'string' } };
                            null === f ? (f = [t]) : f.push(t), c++;
                          }
                        (y = e === c), (s = s || y);
                      }
                      if (!s) {
                        const t = { params: {} };
                        return (
                          null === f ? (f = [t]) : f.push(t),
                          c++,
                          (D.errors = f),
                          !1
                        );
                      }
                      (c = r),
                        null !== f && (r ? (f.length = r) : (f = null)),
                        (m = e === c);
                    } else m = !0;
                    if (m) {
                      if (void 0 !== n.shareScope) {
                        let t = n.shareScope;
                        const e = c;
                        if (c === e) {
                          if ('string' != typeof t)
                            return (
                              (D.errors = [{ params: { type: 'string' } }]), !1
                            );
                          if (t.length < 1)
                            return (D.errors = [{ params: {} }]), !1;
                        }
                        m = e === c;
                      } else m = !0;
                      if (m)
                        if (void 0 !== n.shared) {
                          const t = c;
                          d(n.shared, {
                            instancePath: s + '/shared',
                            parentData: n,
                            parentDataProperty: 'shared',
                            rootData: l,
                          }) ||
                            ((f = null === f ? d.errors : f.concat(d.errors)),
                            (c = f.length)),
                            (m = t === c);
                        } else m = !0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return (D.errors = f), 0 === c;
}
