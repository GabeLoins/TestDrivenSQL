TestDrivenSQL
=============

Gabe Lyons & Vinh Tran

As SQL-centric analytic workflows become increasingly complex and crucial to business performance, the motivation behind this project lies in the trend that queries that are supposed to be ad-hoc stay around longer and are reused more often than we would expect. In our own experiences and in talking to others, when crucial statistics are computed or “data pulls” occur, a common theme is an auditing/verification step: a process that usually involves other people to ensure that the query (which could be very complex and composed of many subqueries) is correct.

This can be a time consuming and potentially error prone process. Moreover this is precisely why software engineers test their code and adopt test driven development (TDD) practices. However no equivalent standard/culture exists for complex SQL queries. A partial reason for this is because queries in the past had shorter, simpler lifespans: this is increasingly less true in the big data paradigm where business intelligence is no longer a competitive advantage, but the standard way to be competitive.

A second reason is that we believe that there is no existing way to easily test SQL queries and their subqueries. Thus our objective is to make it easier to write SQL queries that are well tested, and as a side effect are also more readable and reusable to streamline the verification step.

See the extended design document [here](https://docs.google.com/a/brown.edu/document/d/1SwvQI0xNGceb6pPAVCSY1QwPuD3PHWRqfcE--dezs24/edit?usp=sharing).
