# Methods and Tools of Big Data

The amount of data in the world, the form these data take, and the ways to
interact with data have all increased exponentially in recent years. The
extraction of useful knowledge from data has long been one of the grand
challenges of computer science, and the dawn of "big data" has transformed the
landscape of data storage, manipulation, and analysis. In this module, we will
look at the tools used to store and interact with data.

The objective of this class is that students gain:

+ First hand experience with and detailed knowledge of computing models, notably cloud computing
+ An understanding of distributed programming models and data distribution
+ Broad knowledge of many databases and their respective strengths

As a part of the [Data and Decision Sciences](https://supaerodatascience.github.io/)
Master's program, this module aims specifically at providing the tool set
students will use for data analysis and knowledge extraction using skills
acquired in the Algorithms of Machine Learning and Digital Economy and Data Uses
classes.

## Class structure

The class is structured in three parts:

### Data storage

  In the first 10 hours of the course, the history of data storage from single
  databased management systems to distributed filesystems will be presented. For
  evaluation, students will install and compare traditional SQL DBMS with a
  NoSQL DBMS.
  
### Data computation

  20 hours on the computing platforms used in the data ecosystem. We will
  briefly cover cluster computing and then go in depth on cloud computing, using
  Google Cloud Platform as an example. Finally, a class on GPU computing will be
  given in coordination with the deep learning section of the AML class.

### Data distribution

  20 hours on the distribution of data, with a focus on distributed programming
  models. We will introduce functional programming and MapReduce, then use these
  concepts in a practical session on Spark. Finally, students will do a graded
  exercise with Dask.

## Class schedule

Data Storage | | | Readings |
--- | --- | --- | ---
[Evolution of Data Management Systems](0_0_intro.md) | 10h | 26/09/2022<br>27/09/2022<br>28/09/2022 | [Slides](https://raw.githubusercontent.com/SupaeroDataScience/OBD/master/readings/Cours__Methodes_Outils_Big_Data_A3_Sept_2022_AH.pdf)
[Databases](0_1_databases.md) | 3h | 12/10/2022 | [Databases introduction (fr)](https://raw.githubusercontent.com/SupaeroDataScience/OBD/master/readings/bdd.pdf)
[PostgeSQL TP](0_2_postgres.md) | 3h | 26/10/2022 | [PostgeSQL](https://www.postgresql.org/docs/manuals/)

Data Computation | | | Readings |
--- | --- | --- | ---
[Cloud Computing & Google Cloud Platform](1_1_overview.md) | 3h | 23/01/2023 | [Readings](1_7_readings.md#about-cloud-computing) |
[Containers](1_1_overview.md) | 3h| 24/01/2022 | [Readings](1_7_readings.md#about-containers)
[Cloud Compute BE](1_1_overview.md) | 3h | 07/02/2022 | 
GPU computing | 6h | 01/02/2023 |
[Deployement, BE 2, Orchestration](1_1_overview.md) | 3h | 13/02/2023 | [Readings](1_7_readings.md#about-orchestration) |
Quiz and Recap | 2h | 13/02/2023 |

| Data Distribution | | | Readings |
| --- | --- | --- | --- |
| [Hadoop and MapReduce](2_3_mapreduce.md) | 3h | 14/02/2023 | [MapReduce](https://raw.githubusercontent.com/SupaeroDataScience/OBD/master/readings/mapreduce.pdf) |
| [Spark](2_4_spark.md) | 4h | 14/02/2023 | [Spark](https://raw.githubusercontent.com/SupaeroDataScience/OBD/master/readings/spark.pdf) [PySpark](https://spark.apache.org/docs/latest/api/python/pyspark.html) |
| [Dask on Kubernetes](2_5_dask.md)| 3h | 07/03/2023 | [Dask documentation](https://docs.dask.org/en/latest/setup/kubernetes.html) |
| [Dask project](2_6_project.md) | 6h | 08/03/2023 | [Dask](https://raw.githubusercontent.com/SupaeroDataScience/OBD/master/readings/dask.pdf) |


