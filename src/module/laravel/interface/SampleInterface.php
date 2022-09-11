<?php

namespace App\Interfaces;

interface SampleInterface{
    public function findAll($condition = null, $pagination = null, $hideDeleted = true);
    public function find($id);
    public function store($data);
    public function update($uuid, $data);
    public function delete($uuid);
    public function findWhere($params);
}
