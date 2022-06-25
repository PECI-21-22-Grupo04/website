window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3787","name":"workoutlog","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Log of all the Client&#39;s workouts information</span></p><p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">&nbsp;</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Projeto PECI 2022","id":"d11"}},{"field":"Schema","value":""},{"field":"Name","value":"workoutlog"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34908","object_id":"column-34908","name":"logID","name_without_path":"logID","description":"Numeric ID used for reference to a Workout Log within the database","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34905","object_id":"column-34905","name":"doneByClientID","name_without_path":"doneByClientID","description":"Numeric ID used for reference to a Client within the database","is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3784","name":"sysclient","name_show_schema":"sysclient"}]},{"id":"column-34909","object_id":"column-34909","name":"progID","name_without_path":"progID","description":"Numeric ID used for reference to a Program within the database","is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3778","name":"program","name_show_schema":"program"}]},{"id":"column-34910","object_id":"column-34910","name":"timeTaken","name_without_path":"timeTaken","description":"Client's time taken working out","is_pk":false,"is_identity":false,"data_type":"time","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34907","object_id":"column-34907","name":"heartRate","name_without_path":"heartRate","description":"Client's heart rate during the workout","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":"120","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34904","object_id":"column-34904","name":"caloriesBurnt","name_without_path":"caloriesBurnt","description":"Client's calories burnt during the workout","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":"30","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34906","object_id":"column-34906","name":"doneDate","name_without_path":"doneDate","description":"Date of when the Client worked out","is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_workoutLog_programID","title":null,"description":null,"is_user_defined":false,"foreign_table":"workoutlog","foreign_table_show_schema":"workoutlog","foreign_table_verbose":"workoutlog","foreign_table_verbose_show_schema":"workoutlog","foreign_table_object_id":"t3787","primary_table":"program","primary_table_show_schema":"program","primary_table_verbose":"program","primary_table_verbose_show_schema":"program","primary_table_object_id":"t3778","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"programID","foreign_column_path":null,"foreign_column":"progID"}],"custom_fields":{}},{"name":"FK_workoutLog_clientID","title":null,"description":null,"is_user_defined":false,"foreign_table":"workoutlog","foreign_table_show_schema":"workoutlog","foreign_table_verbose":"workoutlog","foreign_table_verbose_show_schema":"workoutlog","foreign_table_object_id":"t3787","primary_table":"sysclient","primary_table_show_schema":"sysclient","primary_table_verbose":"sysclient","primary_table_verbose_show_schema":"sysclient","primary_table_object_id":"t3784","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"clientID","foreign_column_path":null,"foreign_column":"doneByClientID"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"logID","name":"logID"},{"path":null,"name_without_path":"doneByClientID","name":"doneByClientID"},{"path":null,"name_without_path":"progID","name":"progID"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"workoutlog","object_name_show_schema":"workoutlog","object_type":"TABLE","object_id":"t3787","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"program","object_name_show_schema":"program","object_type":"TABLE","object_id":"t3778","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"sysclient","object_name_show_schema":"sysclient","object_type":"TABLE","object_id":"t3784","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2022-06-25 21:00"};