# ab-group

[![Build status](https://github.com/mderazon/ab-group/workflows/build/badge.svg)](https://github.com/mderazon/ab-group/actions) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Easily generate ab-groups from user ids for your a/b tests

## Usage

```js
const abGroup = require("ab-group");

abGroup("usr_ZvKYlo2C0PT9H6G5"); // returns 0
abGroup("usr_1032D82eZvKYlo2C"); // returns 1
```

## Behavior

1. Deterministic - Given the same input, it will always output the same group.
2. Random - It is not biased towards any of the groups. This is under the assumption that **your ids are randomly generated**.

## API

```js
abGroup(id, groups);
```

- `id`: **mandatory**. An ID (or any string) to calculate the a/b group from.
- `groups`: **optional**. Number of groups. Defaults for 2 groups (A/B) but you can use it to generate more groups.
